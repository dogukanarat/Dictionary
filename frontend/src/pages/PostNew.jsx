import React, { Component } from 'react'
import api from '../api'
// import Styled from 'styled-components'

import { Card, InPageNotification } from '../components'

function PostNewForm(props) {
    return (
        <div>
            <div class="mb-3">
                <label className="form-label">Title</label>
                <textarea
                    className="form-control"
                    id="title" rows="1"
                    value={props.title}
                    onChange={(event) => { props.onTitleUpdated(event) }}
                />
            </div>
            <div class="mb-3">
                <label className="form-label">Content:</label>
                <textarea
                    className="form-control"
                    id="title" rows="1"
                    value={props.content}
                    onChange={(event) => { props.onContentUpdated(event) }}
                />
            </div>
            <div class="row g-3">
                <div className="col-auto">
                    <button
                        className="btn btn-primary"
                        onClick={() => { props.onNewPostCreated() }}>
                        Create
                    </button>
                </div>
                <div className="col-auto">
                    <button
                        className="btn btn-danger"
                        onClick={() => { }}>
                        Cancel
                    </button>
                </div>

            </div>
        </div>
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
            <main className="flex-shrink-0">
                <div className="container">
                    <h1 className="mt-5"> </h1>
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
                </div>
            </main>
        )
    }
}

export default PagePostNew