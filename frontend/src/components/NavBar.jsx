import React, { Component } from 'react'
// import Styled from 'styled-components'

import NavBarLogo from './NavBarLogo'
import NavBarLinks from './NavBarLinks'
import NavBarSearch from './NavBarSearch'
import NavBarUser from './NavBarUser'

class NavBar extends Component {
    render() {
        return (
            <header className="p-3 bg-dark text-white">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <NavBarLogo />
                        <NavBarLinks />
                        <NavBarSearch />
                        <NavBarUser />
                    </div>
                </div>
            </header>

        )
    }
}

export default NavBar