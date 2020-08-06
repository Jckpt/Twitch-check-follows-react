import React, { Component } from 'react'

export default class Inputs extends Component {
    render() {
        return (
            <>
                <div className='group'>
                    <input type='text' name='searchChat' value={this.props.searchChat} onChange={this.props.handleChange}
                        onKeyUp={this.props.handleSubmit} required />
                    <span className='highlight'></span>
                    <span className='bar'></span>
                    <label>Czat użytkownika</label>
                </div>
                <div className='group'>
                    <input type='text' name='wantedChannel' value={this.props.wantedChannel} onChange={this.props.handleChange}
                        onKeyUp={this.props.handleSubmit} required />
                    <span className='highlight'></span>
                    <span className='bar'></span>
                    <label>Follow u</label>
                </div>
                <div id='container'><input type='checkbox' id='wantJson' checked={this.props.wantJson} onChange={this.props.handleCheckbox} name='wantJson' />tylko .json</div>
            </>
        )
    }
}
