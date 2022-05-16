import React, { Component } from 'react'
import Api from '../api'
import Styled from 'styled-components'

const Wrapper = Styled.div.attrs({
    className: 'jumbotron'
})`
`

// const Update = Styled.div`
//     color: #ef9b0f;
//     cursor: pointer;
// `

// const Delete = Styled.div`
//     color: #ff0000;
//     cursor: pointer;
// `

const PostListGroup = Styled.div.attrs({
    className: "list-group"
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
max-width: 1080px;
padding: 0 15px;
`

const BodyContainerRow = Styled.section.attrs({
    className: 'row py-lg-5',
})`
`

// class PostUpdate extends Component {
//     updateUser = event => {
//         event.preventDefault()

//         window.location.href = `/movies/update/${this.props.id}`
//     }

//     render() {
//         return <Update onClick={this.updateUser}>Update</Update>
//     }
// }

// class PostDelete extends Component {
//     deleteUser = event => {
//         event.preventDefault()

//         if (
//             window.confirm(
//                 `Do you want to delete the post ${this.props.id} permanently?`,
//             )
//         ) {
//             Api.deleteMovieById(this.props.id)
//             window.location.reload()
//         }
//     }

//     render() {
//         return <Delete onClick={this.deleteUser}>Delete</Delete>
//     }
// }

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

        console.log("HELLOOOOOOOOOO")

        return (
            <BodyMain>
                <BodyContainer>
                    <BodyContainerRow>
                        <Wrapper>
                            <PostListGroup>
                                {posts.map(item => {
                                    return (
                                        <PostListGroupItem
                                            title={item.title}
                                            content={item.content}
                                            timeDifference="3 day ago"
                                            author="testAuthor"
                                            link={"post?id=" + item._id}
                                        />
                                    )
                                })
                                }

                            </PostListGroup>
                            {/* <nav aria-label="Page navigation example">
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
                </nav> */}
                asdasdas
                        </Wrapper>
                    </BodyContainerRow>
                </BodyContainer>
            </BodyMain>
        )
    }
}

export default PagePostList