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

    dateDifference = (postDateString) => {
        const nowMilliseconds = new Date().getTime()
        const postMilliseconds = new Date(postDateString).getTime()

        const timeDifference = nowMilliseconds - postMilliseconds
        const timeDifferenceInSeconds = timeDifference / 1000
        const timeDifferenceInMinutes = timeDifference / 1000 / 60
        const timeDifferenceInHours = timeDifference / 1000 / 60 / 60
        const timeDifferenceInDays = timeDifference / 1000 / 60 / 60 / 24
        const timeDifferenceInWeeks = timeDifference / 1000 / 60 / 60 / 24 / 7

        if (timeDifferenceInMinutes < 1) {
            return `${Math.round(timeDifferenceInSeconds)} seconds ago`
        }

        if (timeDifferenceInHours < 1) {
            return `${Math.round(timeDifferenceInMinutes)} minutes ago`
        }

        if (timeDifferenceInDays < 1) {
            return `${Math.round(timeDifferenceInHours)} hours ago`
        }

        if (timeDifferenceInWeeks < 1) {
            return `${Math.round(timeDifferenceInDays)} days ago`
        }

        return `${Math.round(timeDifferenceInWeeks)} weeks ago`


    }

    render() {
        const { posts } = this.state

        return (
            <main className="flex-shrink-0">
                <div className="container">
                    {posts.map(item => {
                        const timeDifference = this.dateDifference(item.createdTime)
                        return (
                            <a
                                key={item._id}
                                href={"post?id=" + item._id}
                                className="list-group-item list-group-item-action flex-column align-items-start p-3">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">{item.title}</h5>
                                    <small>{timeDifference}</small>
                                </div>

                                <small className="text-muted">{item.author}</small>
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