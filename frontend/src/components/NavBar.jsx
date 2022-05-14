import React, { Component } from 'react'
import styled from 'styled-components'

import NavBarLogo from './NavBarLogo'
import NavBarLinks from './NavBarLinks'

const Container = styled.div.attrs({
    className: 'container',
})``

const Nav = styled.nav.attrs({
    className: 'navbar navbar-light bg-light',
})`
    margin-bottom: 20 px;
`

class NavBar extends Component {
    render() {
        return (
            <Container>
                <Nav>
                    <NavBarLogo />
                    <NavBarLinks />
                </Nav>
            </Container>
        )
    }
}

export default NavBar