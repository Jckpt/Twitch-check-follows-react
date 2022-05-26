import React, { Component } from "react";
import Informator from "./Informator";
import SearchChatForm from "./SearchChatForm";
import LoadingBar from "./LoadingBar";
import { calculateDate } from "../utility/utils";
export default class SearchChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wantedChannel: "",
      searchChat: "",
      allChatters: 0,
      checkedViewers: 0,
      foundChatters: 0,
      info: "",
    };
  }
  activate = async () => {
    let proxyUrl = "https://cors-anywhere-ascii.herokuapp.com/",
      targetUrl = `https://tmi.twitch.tv/group/user/${this.state.searchChat.toLowerCase()}/chatters`;
    const response = await fetch(proxyUrl + targetUrl);
    const blob = await response.json();
    let {
      chatters: { viewers, vips, moderators },
    } = blob;
    const everyViewer = [...viewers, ...vips, ...moderators];
    this.setState({
      allChatters: everyViewer.length,
    });
    this.findIDs(everyViewer);
  };
  delay = (ms) => new Promise((res) => setTimeout(res, ms));
  findIDs = async (everyViewer) => {
      let viewersBatch100 =[];
      let iterator = 0;
      while (iterator < everyViewer.length) {
        iterator += 100;
        for (let j = iterator-100; j < iterator; j++) {
          if (j < everyViewer.length) {
            viewersBatch100[j%100] = everyViewer[j];
          }
        }
        let fetchURL = `https://api.twitch.tv/helix/users?login=`;
        let viewersString = viewersBatch100
          .map((viewer) => `${viewer}&login=`)
          .join("")
          .slice(0, -7);
        const response = await fetch(`${fetchURL}${viewersString}`, {
          headers: {
            Authorization: `Bearer ${this.props.accessToken}`,
            "Client-ID": this.props.clientID,
          },
        });
        const { data } = await response.json();
        for(let i=0;i<data.length;i++){
          const { id, profile_image_url: avatar, display_name } = data[i];
          this.insertToState(id, "", avatar, display_name);
        }
        viewersBatch100 = [];
      }
  };
  insertToState = async (id, cursor, avatar, display_name) => {
    try {
      let response = await fetch(
        `https://api.twitch.tv/helix/users/follows?from_id=${id}&first=100&after=${cursor}`,
        {
          headers: {
            Authorization: `Bearer ${this.props.accessToken}`,
            "Client-ID": this.props.clientID,
          },
        }
      );
      let responseJson = await response.json();
      let { total, data: follows, pagination } = responseJson;
      if(responseJson.status===429){
          const errorMessage =  { code : 429, message : responseJson };
          throw errorMessage;
      }
      if (total !== 0) {
        for (let i = 0; i < follows.length; i++) {
          if (this.state.wantedChannel.toLowerCase() === follows[i].to_name.toLowerCase()) {
            let userElement = {
              nick: display_name,
              followLength: calculateDate(follows[i].followed_at),
              avatar,
            };
            this.props.getUsers(userElement);
            this.setState({
              foundChatters: this.state.foundChatters + 1,
            });
            this.changeInfo(this.state.foundChatters);
          }
        }
      }
      this.setState({
        checkedViewers: this.state.checkedViewers + 1,
      });
      if (typeof pagination.cursor !== "undefined") {
        this.insertToState(id, pagination.cursor, avatar, display_name);
      }
    } catch (err) {
      await this.delay(5000);
      this.insertToState(id, cursor, avatar, display_name);
    }
  };
  changeInfo = (foundChatters) => {
    this.setState({
      info: `Na czacie użytkownika ${this.state.searchChat} jest ${foundChatters} użytkowników z follow'em u ${this.state.wantedChannel}`,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.searchChat === "" || this.state.wantedChannel === "") return;
    this.setState({
      checkedViewers: 0,
      allChatters: 0,
      foundChatters: 0,
      info: "",
    });
    this.props.clearUsers();
    this.activate();
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div id="inputs">
        <SearchChatForm
          accessToken={this.props.accessToken}
          searchChat={this.state.searchChat}
          wantedChannel={this.state.wantedChannel}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <LoadingBar
          end={this.state.allChatters}
          start={this.state.checkedViewers}
        />
        <Informator
          changeInfo={this.changeInfo}
          info={this.state.info}
          start={this.state.foundChatters}
          searchChat={this.state.searchChat}
        />
      </div>
    );
  }
}
