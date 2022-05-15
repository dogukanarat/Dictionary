import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Styled from 'styled-components'

const Wrapper = Styled.div.attrs({
    className: 'collapse navbar-collapse',
})``

const List = Styled.div.attrs({
    className: 'navbar-nav mr-auto',
})`
`

const Item = Styled.div.attrs({
    className: 'collapse navbar-collapse navbar-brand',
})``

class NavBarLinks extends Component {
    render() {
        return (
            <React.Fragment>
                <Wrapper>
                    <List>
                        <Item>
                            <Link to="/post/list" className="nav-link">
                                Posts
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/post/new" className="nav-link">
                                New
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/post/list" className="nav-link">
                                Login
                            </Link>
                        </Item>
                    </List>
                </Wrapper>
            </React.Fragment>
        )
    }
}

export default NavBarLinks