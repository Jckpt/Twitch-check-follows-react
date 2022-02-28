import React, { Component } from 'react';

export default class InputText extends Component {
  render() {
    return (
      <div className='group'>
        <input type='text' name={this.props.name} value={this.props.value} onChange={this.props.handleChange} required />
        <span className='highlight'></span>
        <span className='bar'></span>
        <label>{this.props.label}</label>
      </div>
    );
  }
}
