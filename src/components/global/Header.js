import React, { Component } from 'react'
import './css/Header.css'

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <nav className="NavBar">
                    <ul className="List">
                        <li><a href="default.asp">Linder</a></li>
                        <li><a href="news.asp">Work</a></li>
                        <li><a href="contact.asp">Contact</a></li>
                    </ul>
                </nav>
                <div>
                    <h2>Hi, I'm Linder Hassinger</h2>
                </div>
            </div>
        )
    }
}

export default Header