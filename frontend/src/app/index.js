import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { PostList, PostNew } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/post/list" exact component={PostList} />
                <Route path="/post/new" exact component={PostNew} />
            </Switch>
        </Router>
    )
}

export default App