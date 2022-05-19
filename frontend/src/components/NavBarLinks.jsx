import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import Styled from 'styled-components'


class NavBarLinks extends Component {
    constructor(props) {
        super(props)

        const token = window.localStorage.getItem("token");

        const isLoggedIn = token != null ? true : false;

        this.state = {
            isLoggedIn: isLoggedIn,
        }
    }

    render() {
        return (
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li>
                    <a className="nav-link px-2 text-secondary" aria-current="page" href="/post/list">
                        Posts
                    </a>
                </li>
                {this.state.isLoggedIn ?
                    <li>
                        <a className="nav-link px-2 text-secondary" href="/post/new">
                            New Post
                        </a>
                    </li>
                    : null}
            </ul>
        )
    }
}

export default NavBarLinks