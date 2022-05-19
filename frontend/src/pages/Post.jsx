import { useParams } from 'react-router-dom'
import { useState } from 'react'
import api from '../api'

function PagePost(_props) {

    let { postId } = useParams();

    const [post, setPost] = useState(0);

    api.post(postId)
        .then((payload) => {
            setPost(payload.data)
        })
        .catch((_error) => {
            return null
        })

    return (
        <main className="flex-shrink-0">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>{post.title}</h1>
                        {post.content}
                    </div>
                </div>
            </div>
        </main>
    )

}

export default PagePost