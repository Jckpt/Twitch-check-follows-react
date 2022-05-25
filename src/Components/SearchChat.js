import React, { Component } from 'react';
import Informator from './Informator';
import SearchChatForm from './SearchChatForm';
import LoadingBar from './LoadingBar';
import { calculateDate } from '../utility/utils';
export default class SearchChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wantedChannel: '',
      searchChat: '',
      allChatters: 0,
      checkedViewers: 0,
      foundChatters: 0,
      info: '',
    };
  }
  activate = async () => {
    let proxyUrl = 'https://cors-anywhere-ascii.herokuapp.com/',
      targetUrl = `https://tmi.twitch.tv/group/user/${this.state.searchChat}/chatters`;
    const response = await fetch(proxyUrl + targetUrl);
    const blob = await response.json();
    let {
      chatters: { viewers, vips, moderators },
    } = blob;
    console.log(viewers);
    const everyViewer = [...viewers, ...vips, ...moderators];
    console.log(everyViewer.length);
    this.setState({
      allChatters: everyViewer.length,
    });
    for (let j = 0; j < everyViewer.length; j++) {
      this.findID(everyViewer[j].toLowerCase());
    }
  };
  findID = async (userName) => {
    const response = await fetch(`https://api.twitch.tv/helix/users?login=${userName}`, {
      headers: {
        'Authorization': `Bearer ${this.props.accessToken}`,
        'Client-ID': this.props.clientID,
      },
    });
    const data = await response.json();
    const { id } = data.data[0];
    this.insertToState(id, '');
  };
  insertToState = async (id, cursor) => {
    let response = await fetch(`https://api.twitch.tv/helix/users/follows?from_id=${id}&first=100&after=${cursor}`, {
      headers: {
        'Authorization': `Bearer ${this.props.accessToken}`,
        'Client-ID': this.props.clientID,
      },
    });
    let responseJson = await response.json();
    let { total ,data: follows, pagination } = responseJson;
    console.log(responseJson);
    if (total !== 0) {
      for (let i = 0; i < follows.length; i++) {
        if(this.state.wantedChannel===follows[i].to_name.toLowerCase()){
          let userElement = {
            nick: follows[i].to_name,
            followLength: calculateDate(follows[i].followed_at),
            avatar: follows[i].profile_image_url,
          };
          this.props.getUsers(userElement);
        }
      }
    }
    this.setState({
      checkedViewers: this.state.checkedViewers + 1,
    });
    if (typeof pagination.cursor !== "undefined") {
      console.log("siema");
      this.insertToState(id, pagination.cursor);
    }
  };
  changeInfo = (foundChatters) => {
      this.setState({
        info: `Na czacie użytkownika ${this.state.searchChat} jest ${foundChatters} użytkowników z follow'em u ${this.state.wantedChannel}`,
      });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.searchChat === '' || this.state.wantedChannel === '') return;
    this.setState({
      checkedViewers: 0,
      allChatters: 0,
      foundChatters: 0,
      info: '',
    });
    this.props.clearUsers();
    console.log(this.state);
    this.activate();
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value.toLowerCase(),
    });
  };
  render() {
    return (
      <div id='inputs'>
        <SearchChatForm accessToken={this.props.accessToken} searchChat={this.state.searchChat} wantedChannel={this.state.wantedChannel} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <LoadingBar end={this.state.allChatters} start={this.state.checkedViewers} />
        <Informator changeInfo={this.changeInfo} info={this.state.info} start={this.state.foundChatters} searchChat={this.state.searchChat} />
      </div>
    );
  }
}
