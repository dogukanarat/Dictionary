import React, { Component } from 'react'
// import Styled from 'styled-components'

import NavBarLogo from './NavBarLogo'
import NavBarLinks from './NavBarLinks'
import NavBarSearch from './NavBarSearch'

class NavBar extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-dark fixed-top bg-dark navbar-expand-md">
                    <div className="container-fluid">
                        <NavBarLogo />
                        <NavBarLinks />
                        <NavBarSearch />
                    </div>
                </nav>
            </header>

        )
    }
}

export default NavBar