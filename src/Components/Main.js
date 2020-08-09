import React, { Component } from 'react';
import Logic from './Logic';
import UserList from './UserList';
export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }
  getUsers = (user) => {
    this.setState({
      users: [...this.state.users, user],
    });
  };
  clearUsers = () => {
    this.setState({
      users: [],
    });
  };
  render() {
    return (
      <main>
        <Logic getUsers={this.getUsers} clearUsers={this.clearUsers} />
        <UserList users={this.state.users} />
      </main>
    );
  }
}
