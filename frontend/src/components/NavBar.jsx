import React, { Component } from 'react'
import Styled from 'styled-components'

import NavBarLogo from './NavBarLogo'
import NavBarLinks from './NavBarLinks'
import NavBarSearch from './NavBarSearch'

const NavBarWrapper = Styled.nav.attrs({
    className: 'navbar navbar-dark fixed-top bg-dark navbar-expand-md',
})`
`

const NavBarContainer = Styled.div.attrs({
    className: 'container-fluid',
})`
`

class NavBar extends Component {
    render() {
        return (
            <header>
                <NavBarWrapper>
                    <NavBarContainer>
                        <NavBarLogo />
                        <NavBarLinks />
                    </NavBarContainer>
                </NavBarWrapper>
            </header>

        )
    }
}

export default NavBar