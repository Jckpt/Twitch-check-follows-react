import React, { Component } from 'react';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale-subtle.css';
export default class Inputs extends Component {
  render() {
    return (
      <form id='inputs' method='POST' onSubmit={this.props.handleSubmit}>
        <div className='group'>
          <input type='text' name='searchChat' value={this.props.searchChat} onChange={this.props.handleChange} required />
          <span className='highlight'></span>
          <span className='bar'></span>
          <label>Czat użytkownika</label>
        </div>
        <div className='group'>
          <input type='text' name='wantedChannel' value={this.props.wantedChannel} onChange={this.props.handleChange} required />
          <span className='highlight'></span>
          <span className='bar'></span>
          <label>Follow u</label>
        </div>
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
