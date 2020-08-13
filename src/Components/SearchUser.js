import React, { Component } from 'react';
import SearchUserForm from './SearchUserForm';
import LoadingBar from './LoadingBar';
import Informator from './Informator';
export default class SearchUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchUser: '',
      allFollows: 0,
      checkedFollows: 0,
    };
  }
  findID = async () => {
    let page = 0;
    let response = await fetch(`https://api.twitch.tv/kraken/users?login=${this.state.searchUser}`, {
      headers: {
        Accept: 'application/vnd.twitchtv.v5+json',
        'Client-ID': 'k1c1q8lb5qd9oxn9cnfjnh2manhuo0',
      },
    });
    let data = await response.json();
    console.log(data);
    let {
      users: [user],
    } = data;
    this.insertToState(user._id, page);
  };
  calculateDate = (followDate) => {
    followDate = followDate.substring(0, 10);
    followDate = new Date(followDate);
    let d = new Date();
    let diff = new Date(d - Date.parse(followDate)) / 86400000;
    diff = Math.trunc(diff);
    return diff;
  };
  insertToState = async (id, page) => {
    let response = await fetch(`https://api.twitch.tv/kraken/users/${id}/follows/channels/?limit=100&offset=${page * 100}`, {
      headers: {
        Accept: 'application/vnd.twitchtv.v5+json',
        'Client-ID': 'k1c1q8lb5qd9oxn9cnfjnh2manhuo0',
      },
    });
    let data = await response.json();
    let { follows } = data;
    this.setState({
      allFollows: follows.length,
    });
    console.log(follows);
    if (follows.length === 0) {
      this.setState({
        checkedFollows: this.state.checkedFollows + 1,
      });
    }
    for (let i = 0; i < follows.length; i++) {
      let avatar = follows[i].channel.logo.replace(/300x300/, '70x70');
      this.setState({
        checkedFollows: this.state.checkedFollows + 1,
      });
      let days = this.calculateDate(follows[i].created_at);
      let userElement = {
        nick: follows[i].channel.name,
        followLength: days,
        avatar,
      };
      this.props.getUsers(userElement);
    }
    if (follows.length === 100) {
      page++;
      this.insertToState(id, page);
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
    if (this.state.searchUser === '') return;
    this.setState({
      checkedViewers: 0,
      allChatters: 0,
      foundChatters: 0,
      info: '',
    });
    this.props.clearUsers();
    this.findID();
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value.toLowerCase(),
    });
  };
  render() {
    return (
      <div id='inputs'>
        <SearchUserForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <LoadingBar end={this.state.allFollows} start={this.state.checkedFollows} />
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
