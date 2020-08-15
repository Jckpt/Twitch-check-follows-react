import React, { Component } from 'react';
import SearchChat from './SearchChat';
import UserList from './UserList';
import SearchUser from './SearchUser';
import { Switch, Route, withRouter } from 'react-router-dom';
class Main extends Component {
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
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.clearUsers();
    }
  }
  render() {
    return (
      <main>
        <Switch>
          <Route path='/' exact render={() => <SearchUser users={this.state.users} getUsers={this.getUsers} clearUsers={this.clearUsers} />} />
          <Route path='/czatu' render={() => <SearchChat getUsers={this.getUsers} clearUsers={this.clearUsers} />} />
          <Route path='/uzytkownika' render={() => <SearchUser getUsers={this.getUsers} clearUsers={this.clearUsers} />} />
        </Switch>
        <UserList users={this.state.users} />
      </main>
    );
  }
}
export default withRouter(Main);
