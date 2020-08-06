import React, { Component } from 'react'
import logo from '../Images/twitch_logo.png'
export default class Header extends Component {
    render() {
        return (
            <header>
                <h1><div className="tytul">Rewizja</div></h1>
                <div id="ttvLogo"><img src={logo} alt='' /></div>
                <h1><div className="tytul">czatu</div></h1>
            </header>
        )
    }
}
