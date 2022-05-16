import React, { Component } from 'react'
import api from '../api'

import { Card, InPageNotification } from '../components'
import Styled from 'styled-components'

const Wrapper = Styled.div.attrs({
    className: 'jumbotron'
})`
`

const Label = Styled.label`
    margin: 5px;
`

const InputText = Styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const InputTextWide = Styled.textarea.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = Styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = Styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

const PostNewFormWrapper = Styled.div.attrs({
})`
`

const BodyMain = Styled.main.attrs({
    className: 'm-auto',
})`
`

const BodyContainer = Styled.section.attrs({
    className: 'container',
})`
width: auto;
max-width: 680px;
padding: 0 15px;
`

const BodyContainerRow = Styled.section.attrs({
    className: 'row py-lg-5',
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
            <InputTextWide
                type="text"
                value={props.content}
                onChange={(event) => { props.onContentUpdated(event) }}
            />

            <Button onClick={() => { props.onNewPostCreated() }}>Add Post</Button>
            <CancelButton href={'/post/list'}>Cancel</CancelButton>
        </PostNewFormWrapper>
    )
}

class PagePostNew extends Component {
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
            "content": content
        }

        console.log(payload)

        await api.postNew(payload).then(res => {
            this.setState({
                title: '',
                content: '',
                isSuccessful: true,
            })

            console.log(res)
        })
    }

    render() {
        const { title, content, isSuccessful } = this.state
        return (
            <BodyMain>
                <BodyContainer>
                    <BodyContainerRow>
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
                    </BodyContainerRow>
                </BodyContainer>
            </BodyMain>
        )
    }
}

export default PagePostNew