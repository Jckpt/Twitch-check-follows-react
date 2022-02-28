import React, { Component } from 'react';
import SearchUserForm from './SearchUserForm';
import LoadingBar from './LoadingBar';
import Informator from './Informator';
import { calculateDate } from '../utility/utils';
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

    let {
      users: [user],
    } = data;
    this.insertToState(user._id, page);
  };

  insertToState = async (id, page) => {
    let howMuch = 100;
    let response = await fetch(`https://api.twitch.tv/kraken/users/${id}/follows/channels?limit=100&offset=${howMuch * page}&sortby=last_broadcast`, {
      headers: {
        Accept: 'application/vnd.twitchtv.v5+json',
        'Client-ID': 'k1c1q8lb5qd9oxn9cnfjnh2manhuo0',
      },
    });
    let data = await response.json();
    let { follows } = data;
    this.setState({
      allFollows: this.state.allFollows + follows.length,
    });

    if (follows.length === 0) {
      this.setState({
        info: `${this.state.searchUser} nie posiada żadnego follow'a`,
      });
    }
    for (let i = 0; i < follows.length; i++) {
      let avatar = follows[i].channel.logo.replace(/300x300/, '70x70');
      this.setState({
        checkedFollows: this.state.checkedFollows + 1,
      });
      let days = calculateDate(follows[i].created_at);
      let userElement = {
        nick: follows[i].channel.name,
        followLength: days,
        avatar,
      };
      this.props.getUsers(userElement);
    }
    if (follows.length%100===0 || follows.length%99===0) {
      page++;
      this.insertToState(id, page);
    }
  };
  changeInfo = () => {
    this.setState({
      info: `${this.state.searchUser} ma ${this.state.allFollows} follow'ów`,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.searchUser === '') return;
    this.setState({
      allFollows: 0,
      checkedFollows: 0,
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
        <LoadingBar start={this.state.checkedFollows} end={this.state.allFollows} />
        <Informator changeInfo={this.changeInfo} info={this.state.info} start={this.state.checkedFollows} searchChat={this.state.searchChat} />
      </div>
    );
  }
}
