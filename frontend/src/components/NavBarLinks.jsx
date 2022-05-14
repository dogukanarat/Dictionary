import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div.attrs({
    className: 'collapse navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})`
`

const Item = styled.div.attrs({
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
                    </List>
                </Wrapper>
            </React.Fragment>
        )
    }
}

export default NavBarLinks