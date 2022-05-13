import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class PostNew extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: '',
        }
    }

    handleChangeTitle = async event => {
        const title = event.target.value
        this.setState({ title })
    }

    handleChangeDescription = async event => {
        const description = event.target.value
        this.setState({ description })
    }

    handleNewPost = async () => {
        const { title, description } = this.state
        const payload =
        {
            "title": title,
            "description": description,
            "completed": true
        }

        await api.postNew(payload).then(res => {
            window.alert(`New post is added successfully!`)
            this.setState({
                title: '',
                description: '',
            })
        })
    }

    render() {
        const { title, description } = this.state
        return (
            <Wrapper>
                <Title>New Post</Title>

                <Label>Title: </Label>
                <InputText
                    type="text"
                    value={title}
                    onChange={this.handleChangeTitle}
                />

                <Label>Description: </Label>
                <InputText
                    type="text"
                    value={description}
                    onChange={this.handleChangeDescription}
                />

                <Button onClick={this.handleNewPost}>Add Post</Button>
                <CancelButton href={'/post/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default PostNew