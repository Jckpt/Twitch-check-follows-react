import React, { Component } from 'react';
import SearchChat from './SearchChat';
import UserList from './UserList';
import SearchUser from './SearchUser';
import { Redirect, Switch, Route, withRouter } from 'react-router-dom';
import Cookies from "js-cookie";
class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      accessToken: this.getInitialStateFromCookie(),
      clientID: '256lknox4x75bj30rwpctxna2ckbmn',
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
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.clearUsers();
    }
  }
  getInitialStateFromCookie = () => {
    // if we have access_token in query string, then set as initial data
    const urlParams = new URLSearchParams(`?${window.location.hash.slice(1)}`);
    if (urlParams.has("access_token")) {
      const access_token = urlParams.get("access_token");
      Cookies.set("access_token", access_token);

      return access_token;
    }

    // otherwise, try get data from cookie
    return Cookies.get("access_token") || "";
  };
  render() {
    return (
      <main>
        <Switch>
          <Route path='/' exact render={() => <SearchUser clientID={this.state.clientID} accessToken={this.state.accessToken} users={this.state.users} getUsers={this.getUsers} clearUsers={this.clearUsers} />} />
          <Route path='/czatu' render={() => <SearchChat clientID={this.state.clientID} accessToken={this.state.accessToken} getUsers={this.getUsers} clearUsers={this.clearUsers} />} />
          <Route path='/uzytkownika' render={() => <SearchUser clientID={this.state.clientID} accessToken={this.state.accessToken} getUsers={this.getUsers} clearUsers={this.clearUsers} />} />
          <Route path='/callback'>
            <Redirect to="/"/>
          </Route>
        </Switch>
        <UserList users={this.state.users} />
      </main>
    );
  }
}
export default withRouter(Main);
