import React, { Component } from 'react';
import Logic from './Logic';
import UserList from './UserList';
export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      wantJson: false,
    };
  }
  getUsers = (user) => {
    this.setState({
      users: this.state.users.concat(user),
    });
  };
  clearUsers = () => {
    this.setState({
      users: [],
    });
  };
  handleCheckbox = ({ target: { checked } }) => {
    this.setState({
      wantJson: checked,
    });
  };
  render() {
    return (
      <main>
        <Logic getUsers={this.getUsers} clearUsers={this.clearUsers} handleCheckbox={this.handleCheckbox} wantJson={this.state.wantJson} />
        <UserList users={this.state.users} wantJson={this.state.wantJson} />
      </main>
    );
  }
}
