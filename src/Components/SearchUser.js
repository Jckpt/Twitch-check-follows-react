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
    const response = await fetch(`https://api.twitch.tv/helix/users?login=${this.state.searchUser}`, {
      headers: {
        'Authorization': `Bearer ${this.props.accessToken}`,
        'Client-ID': this.props.clientID,
      },
    });
    const {data} = await response.json();
    if(data.length>0){
      const { id } = data[0];
      this.insertToState(id, '');
    }
    else{
      this.setState({
        info: `Ten użytkownik nie istnieje`,
      });
    }
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
    let fetchURL = `https://api.twitch.tv/helix/users?login=`;
    let followString = follows.map(follow => `${follow.to_login}&login=`).join('').slice(0,-7);
    response = await fetch(`${fetchURL}${followString}`, {
      headers: {
        'Authorization': `Bearer ${this.props.accessToken}`,
        'Client-ID': this.props.clientID,
      },
    });
    let data = await response.json();
    let { "data": users } = data;
    this.setState({
      allFollows: total,
    });

    if (total === 0) {
      this.setState({
        info: `${this.state.searchUser} nie posiada żadnego follow'a`,
      });
    }
    for(let i=0;i<follows.length;i++){
      for(let j=0;j<users.length;j++){
        if(users[j].login===follows[i].to_login){
          follows[i].profile_image_url = users[j].profile_image_url;
          break;
        }
      }
    }
    for (let i = 0; i < follows.length; i++) {
      this.setState({
        checkedFollows: this.state.checkedFollows + 1,
      });
      let userElement = {
        nick: follows[i].to_name,
        followLength: calculateDate(follows[i].followed_at),
        avatar: follows[i].profile_image_url,
      };
      this.props.getUsers(userElement);
    }
    if (typeof pagination.cursor !== "undefined") {
      this.insertToState(id, pagination.cursor);
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
        <SearchUserForm accessToken={this.props.accessToken} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <LoadingBar start={this.state.checkedFollows} end={this.state.allFollows} />
        <Informator changeInfo={this.changeInfo} info={this.state.info} start={this.state.checkedFollows} searchChat={this.state.searchChat} />
      </div>
    );
  }
}
