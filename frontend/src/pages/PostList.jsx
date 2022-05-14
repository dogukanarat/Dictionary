import React, { Component } from 'react'
import Api from '../api'
import Styled from 'styled-components'

const Wrapper = Styled.div.attrs({
    className: 'jumbotron'
})`
`

const Update = Styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = Styled.div`
    color: #ff0000;
    cursor: pointer;
`

const PostListGroup = Styled.div.attrs({
    className: "list-group"
})`
`

class PostUpdate extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/movies/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class PostDelete extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do you want to delete the post ${this.props.id} permanently?`,
            )
        ) {
            Api.deleteMovieById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

function Table(props) {

    const columns = React.useMemo(
        () => [
            {
                Header: 'Id',
                accessor: '_id',
            },
            {
                Header: 'Title',
                accessor: 'title',
            },
            {
                Header: 'Description',
                accessor: 'description',
            },
        ], [])

    const data = React.useMemo(() => props.data, [])

    console.log(props.data)

    return (
        <table>
            <thead>
                <tr>
                    <td>asdasd</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>asdasdasd</td>
                </tr>
            </tbody>
        </table>
    )
}

function PostListGroupItem(props) {
    return (
        <a href={props.link} class="list-group-item list-group-item-action flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{props.title}</h5>
                <small>{props.timeDifference}</small>
            </div>
            <p class="mb-1">{props.content}</p>
            <small>{props.author}</small>
        </a>
    )
}

class PostList extends Component {
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
        const { posts, isLoading } = this.state

        let showTable = true

        if (!posts.length) {
            showTable = false
        }

        return (
            <Wrapper>
                <PostListGroup>
                    {posts.map(item => {
                        return (
                            <PostListGroupItem
                                title={item.title}
                                content={item.description}
                                timeDifference="3 day ago"
                                author="testAuthor"
                                link={"post?id=" + item._id}
                            />
                        )
                        })
                    }

                </PostListGroup>
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center mr-6">
                        <li class="page-item">
                            <a class="page-link" href="#" tabindex="-1">{"<"}</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">{">"}</a>
                        </li>
                    </ul>
                </nav>
            </Wrapper>
        )
    }
}

export default PostList