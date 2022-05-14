import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../logo.svg'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class NavBarLogo extends Component {
    render() {
        return (
            <Wrapper>
                Simple Dictionary
            </Wrapper>
        )
    }
}

export default NavBarLogo