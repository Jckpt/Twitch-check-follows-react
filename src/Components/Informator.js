import React, { Component } from 'react';

export default class Informator extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.start !== prevProps.start) {
      this.props.changeInfo(this.props.start);
    }
  }
  render() {
    return <div id='informator'>{this.props.info}</div>;
  }
}
