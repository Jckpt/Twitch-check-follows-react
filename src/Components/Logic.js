import React, { Component } from 'react';
import Informator from './Informator';
import Inputs from './Inputs';
import LoadingBar from './LoadingBar';
export default class Logic extends Component {
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
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
      targetUrl = `https://tmi.twitch.tv/group/user/${this.state.searchChat}/chatters`;
    const response = await fetch(proxyUrl + targetUrl);
    const blob = await response.json();
    let {
      chatters: { viewers, vips, moderators },
    } = blob;
    const everyViewer = [...viewers, ...vips, ...moderators];
    this.setState({
      allChatters: everyViewer.length,
    });
    for (let j = 0; j < everyViewer.length; j++) {
      console.log(everyViewer[j]);
      this.findID(everyViewer[j].toLowerCase());
    }
  };
  findID = async (name) => {
    let response = await fetch(`https://api.twitch.tv/kraken/users?login=${name}`, {
      headers: {
        Accept: 'application/vnd.twitchtv.v5+json',
        'Client-ID': 'k1c1q8lb5qd9oxn9cnfjnh2manhuo0',
      },
    });
    let data = await response.json();
    let {
      users: [user],
    } = data;
    this.insertToState(user._id, name, user.logo);
  };
  calculateDate = (followDate) => {
    followDate = followDate.substring(0, 10);
    followDate = new Date(followDate);
    let d = new Date();
    let diff = new Date(d - Date.parse(followDate)) / 86400000;
    diff = Math.trunc(diff);
    return diff;
  };
  insertToState = async (id, userNick, avatar) => {
    let wantedChannel = this.state.wantedChannel.toLowerCase();
    avatar = avatar.replace(/300x300/, '70x70');
    let response = await fetch(`https://api.twitch.tv/kraken/users/${id}/follows/channels`, {
      headers: {
        Accept: 'application/vnd.twitchtv.v5+json',
        'Client-ID': 'k1c1q8lb5qd9oxn9cnfjnh2manhuo0',
      },
    });
    let data = await response.json();
    let { follows } = data;
    if (follows.length === 0) {
      this.setState({
        checkedViewers: this.state.checkedViewers + 1,
      });
    }
    for (let i = 0; i < follows.length; i++) {
      if (follows[i].channel.name === wantedChannel) {
        this.setState({
          checkedViewers: this.state.checkedViewers + 1,
          foundChatters: this.state.foundChatters + 1,
        });
        let days = this.calculateDate(follows[i].created_at);
        let userElement;
        userElement = {
          nick: userNick,
          followLength: days,
          avatar,
        };
        this.props.getUsers(userElement);
        break;
      } else {
        if (follows.length - 1 === i) {
          this.setState({
            checkedViewers: this.state.checkedViewers + 1,
          });
        }
      }
    }
  };
  changeInfo = (foundChatters) => {
    const stinkers = ['overpow', 'rybsonlol_', 'vysotzky', 'randombrucetv', 'stazjaa', 'shini_waifu', 'kubon_'];
    if (stinkers.includes(this.state.wantedChannel)) {
      this.setState({
        info: `Na czacie użytkownika ${this.state.searchChat} znaleziono ${foundChatters} śmierdzieli oglądających ${this.state.wantedChannel}`,
      });
    } else {
      this.setState({
        info: `Na czacie użytkownika ${this.state.searchChat} jest ${foundChatters} użytkowników z follow'em u ${this.state.wantedChannel}`,
      });
    }
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
        <Inputs handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <LoadingBar allChatters={this.state.allChatters} checkedViewers={this.state.checkedViewers} />
        <Informator
          changeInfo={this.changeInfo}
          info={this.state.info}
          foundChatters={this.state.foundChatters}
          searchChat={this.state.searchChat}
          wantedChannel={this.state.wantedChannel}
        />
      </div>
    );
  }
}
