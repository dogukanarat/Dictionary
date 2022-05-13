import React, { Component } from 'react'
import Api from '../api'
import Styled from 'styled-components'

const Wrapper = Styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

const Update = Styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = Styled.div`
    color: #ff0000;
    cursor: pointer;
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
        console.log('PostList -> Render -> Posts: ', posts)

        let showTable = true

        if (!posts.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable &&
                    <Table data={posts} />}
            </Wrapper>
        )
    }
}

export default PostList