import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    Simple Todo Application
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/todo/list" className="nav-link">
                                List Todos
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/todo/create" className="nav-link">
                                Create Todo
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links