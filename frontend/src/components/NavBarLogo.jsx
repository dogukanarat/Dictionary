import React, { Component } from 'react'
import Styled from 'styled-components'

import logo from '../logo.svg'

// const Wrapper = Styled.div.attrs({
//     className: 'navbar-brand',
// })``

class NavBarLogo extends Component {
    render() {
        return (
            <a className="navbar-brand" href="#">Simple Dictionary</a>
        )
    }
}

export default NavBarLogo