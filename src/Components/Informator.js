import React, { Component } from 'react';

export default class Informator extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.foundChatters !== prevProps.foundChatters) {
      this.props.changeInfo(this.props.foundChatters);
    }
  }
  render() {
    return <div id='informator'>{this.props.info}</div>;
  }
}
