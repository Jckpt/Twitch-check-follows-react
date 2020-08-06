import React, { Component } from 'react'

export default class Informator extends Component {
    render() {
        return (
            <div id="informator">{this.props.info}</div>
        )
    }
}
