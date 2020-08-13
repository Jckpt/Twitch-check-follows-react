import React, { Component } from 'react';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale-subtle.css';
import InputText from './InputText';
export default class SearchChatForm extends Component {
  render() {
    return (
      <form id='inputs' method='POST' onSubmit={this.props.handleSubmit}>
        <InputText name='searchChat' value={this.props.searchChat} handleChange={this.props.handleChange} label={'Czat użytkownika'} />
        <InputText name='wantedChannel' value={this.props.wantedChannel} handleChange={this.props.handleChange} label={'Follow u'} />
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
          <input type='submit' id='button' onClick={this.props.handleSubmit} value='Szukaj' />
        </div>
      </form>
    );
  }
}
