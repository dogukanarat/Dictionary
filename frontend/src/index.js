import ReactDOM from 'react-dom/client';
import React from 'react'
import Styled from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components'
import { PostList, PostNew } from './pages'
import 'bootstrap/dist/css/bootstrap.min.css'

const BodyContainer = Styled.main.attrs({
    className: 'container',
})`
`

const Home = () => <h1>Home</h1>
const NoPage = () => <h1>No Page!</h1>

function Body() {
    return (
        <BodyContainer>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/post/list" element={<PostList />} />
                <Route path="/post/new" element={<PostNew />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </BodyContainer>
    )
}
export default function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Body/>
        </BrowserRouter>
    )
}

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);