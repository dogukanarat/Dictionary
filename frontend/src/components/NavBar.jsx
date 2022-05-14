import React, { Component } from 'react'
import Styled from 'styled-components'

import NavBarLogo from './NavBarLogo'
import NavBarLinks from './NavBarLinks'
import NavBarSearch from './NavBarSearch'

const NavBarContainer = Styled.nav.attrs({
    className: 'navbar navbar-expand-md navbar-dark fixed-top bg-dark',
})`
`

class NavBar extends Component {
    render() {
        return (
            <NavBarContainer>
                <NavBarLogo />
                <NavBarLinks />
                <NavBarSearch />
            </NavBarContainer>
        )
    }
}

export default NavBar