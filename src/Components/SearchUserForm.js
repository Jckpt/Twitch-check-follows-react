import React, { Component } from 'react';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale-subtle.css';
import InputText from './InputText';
export default class SearchChatForm extends Component {
  URL = "https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=256lknox4x75bj30rwpctxna2ckbmn&redirect_uri=http://localhost:3000/callback/&scope=user%3Aread%3Afollows";
  render() {
    return (
      <form id='inputs' method='POST' onSubmit={this.props.handleSubmit}>
        <InputText name='searchUser' accessToken={this.props.accessToken} value={this.props.searchUser} handleChange={this.props.handleChange} label={'Nazwa użytkownika'} />
        <div id='container'>
          <Tippy
            content={"Najedź na awatar żeby pokazała się długość follow'a"}
            placement='down'
            animation='scale-subtle'
            arrow={false}
            duration={200}
            delay={[75, 0]}
            distance={8}>
            <div id='tooltip'>?</div>
          </Tippy>
          {this.props.accessToken==="" ? (<input type='submit' id='button' onClick={(e) => {e.preventDefault();window.location.href=this.URL;}} value='Zaloguj' />) : (<input type='submit' id='button' onClick={this.props.handleSubmit} value='Rewiduj' />)}
        </div>
      </form>
    );
  }
}
