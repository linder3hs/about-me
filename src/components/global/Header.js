import React, { Component } from 'react'
import logo, { ReactComponent } from './images/logo.svg'
import './css/Header.css'

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="Logo">
                    <img src={logo} />
                    <h2>Hi I'm Linder Hassinger</h2>
                </div>
            </div>
        )
    }
}

export default Header