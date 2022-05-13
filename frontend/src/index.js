import ReactDOM from 'react-dom/client';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavBar } from './components'
import { PostList, PostNew } from './pages'
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => <h1>Home</h1>

export default function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/post/list" element={<PostList />} />
                <Route path="/post/new" element={<PostNew />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);