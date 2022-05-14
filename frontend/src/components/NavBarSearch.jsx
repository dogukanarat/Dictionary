import React, { Component } from 'react'
import Styled from 'styled-components'

const Wrapper = Styled.a.attrs({
    className: '',
})`
`

const Form = Styled.form.attrs({
    className: 'form-inline my-2 my-lg-0',
})`
`

const Input = Styled.input.attrs({
    className: 'form-control mr-sm-2',
    type: 'search',
    placeholder: 'Search',
    ariaLabel: 'Search',
})`
`

const Button = Styled.button.attrs({
    className: 'btn btn-outline-success my-2 my-sm-0',
    type: 'submit',
})`
`

class NavBarSearch extends Component {
    render() {
        return (
            <Wrapper>
                <Form>
                    <Input />
                    <Button>Search</Button>
                </Form>
            </Wrapper>
        )
    }
}

export default NavBarSearch