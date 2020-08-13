import React, { Component } from 'react';
import SearchChat from './SearchChat';
import UserList from './UserList';
import SearchUser from './SearchUser';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
        <Switch>
          <Route path='/' exact render={() => <SearchChat getUsers={this.getUsers} clearUsers={this.clearUsers} />} />
          <Route path='/czatu' exact render={() => <SearchChat getUsers={this.getUsers} clearUsers={this.clearUsers} />} />
          <Route path='/uzytkownika' exact render={() => <SearchUser getUsers={this.getUsers} clearUsers={this.clearUsers} />} />
        </Switch>
        <UserList users={this.state.users} />
      </main>
    );
  }
}
