import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { TodoList, TodoInsert } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/todo/list" exact component={TodoList} />
                <Route path="/todo/create" exact component={TodoInsert} />
            </Switch>
        </Router>
    )
}

export default App