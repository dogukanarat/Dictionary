import { Component } from 'react'
import api from '../api'
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

        await api.postList().then(payload => {

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
                        return (
                            <a 
                            href={"post?id=" + item._id}
                            className="list-group-item list-group-item-action flex-column align-items-start">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">{item.title}</h5>
                                    <small>{timeDifference}</small>
                                </div>
                                <p className="mb-1">{item.content}</p>
                                <small>{item.author}</small>
                            </a>
                        )
                    })
                    }
                    <br />
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center mr-6">
                            <li className="page-item">
                                <a className="page-link" href="/post/0" tabIndex="-1">{"<"}</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="/post/1">1</a></li>
                            <li className="page-item"><a className="page-link" href="/post/2">2</a></li>
                            <li className="page-item"><a className="page-link" href="/post/3">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="/post/4">{">"}</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </main>
        )
    }
}

export default PagePostList