import React, { Component } from 'react'
import api from '../api'

import { Card, InPageNotification } from '../components'
import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'jumbotron'
})`
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

const PostNewFormWrapper = styled.div.attrs({
})`
`

function PostNewForm(props) {

    return (
        <PostNewFormWrapper>
            <Label>Title: </Label>
            <InputText
                type="text"
                value={props.title}
                onChange={(event) => { props.onTitleUpdated(event) }}
            />

            <Label>Content: </Label>
            <InputText
                type="text"
                value={props.content}
                onChange={(event) => { props.onContentUpdated(event) }}
            />

            <Button onClick={() => { props.onNewPostCreated() }}>Add Post</Button>
            <CancelButton href={'/post/list'}>Cancel</CancelButton>
        </PostNewFormWrapper>
    )
}

class PostNew extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            content: '',
            isSuccessful: false,
        }

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeContent = this.handleChangeContent.bind(this);
        this.handleNewPost = this.handleNewPost.bind(this);
    }

    handleChangeTitle = async event => {
        const title = event.target.value
        this.setState({ title })
        this.setState({ isSuccessful: false })
    }

    handleChangeContent = async event => {
        const content = event.target.value
        this.setState({ content })
        this.setState({ isSuccessful: false })
    }

    handleNewPost = async (event) => {
        const { title, content } = this.state

        const payload =
        {
            "title": title,
            "description": content,
            "completed": true
        }

        await api.postNew(payload).then(res => {
            this.setState({
                title: '',
                content: '',
                isSuccessful: true,
            })
        })
    }

    render() {
        const { title, content, isSuccessful } = this.state
        return (
            <Wrapper>
                {isSuccessful &&
                    <InPageNotification variant="success">New post is added successfully!</InPageNotification>
                }
                <Card header="New Post">
                    <PostNewForm
                        title={title}
                        content={content}
                        onTitleUpdated={this.handleChangeTitle}
                        onContentUpdated={this.handleChangeContent}
                        onNewPostCreated={this.handleNewPost}
                    />
                </Card>
            </Wrapper>
        )
    }
}

export default PostNew