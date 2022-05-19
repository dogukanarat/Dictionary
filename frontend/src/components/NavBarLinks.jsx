import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import Styled from 'styled-components'


class NavBarLinks extends Component {
    render() {
        return (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/post/list">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/post/new">New</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/login">Login</a>
                </li>
            </ul>
        )
    }
}

export default NavBarLinks