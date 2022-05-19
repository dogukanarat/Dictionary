import React, { Component } from 'react'
import Api from '../api'
// import Styled from 'styled-components'

class PagePostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await Api.postList().then(payload => {

            this.setState({
                posts: payload.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { posts } = this.state

        return (
            <main className="flex-shrink-0">
                <div className="container">
                    <h1 className="mt-5"> </h1>
                    {posts.map(item => {
                        const timeDifference = "3 day ago"
                        const author = "admin"
                        return (
                            <a href={"post?id=" + item._id} class="list-group-item list-group-item-action flex-column align-items-start">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">{item.title}</h5>
                                    <small>{timeDifference}</small>
                                </div>
                                <p class="mb-1">{item.content}</p>
                                <small>{author}</small>
                            </a>
                        )
                    })
                    }
                    <br />
                    <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-center mr-6">
                            <li class="page-item">
                                <a class="page-link" href="/post/0" tabindex="-1">{"<"}</a>
                            </li>
                            <li class="page-item"><a class="page-link" href="/post/1">1</a></li>
                            <li class="page-item"><a class="page-link" href="/post/2">2</a></li>
                            <li class="page-item"><a class="page-link" href="/post/3">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="/post/4">{">"}</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </main>
        )
    }
}

export default PagePostList