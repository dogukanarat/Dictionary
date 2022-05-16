import ReactDOM from 'react-dom/client';
import React from 'react'
import Styled from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components'
import { PagePostList, PagePostNew, PageLogin, PageRegister  } from './pages'

import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => <h1>Home</h1>
const NoPage = () => <h1>No Page!</h1>

function Body() {
    return (
            <Routes>
                <Route index element={<Home />} />
                <Route path="/post/list" element={<PagePostList />} />
                <Route path="/post/new" element={<PagePostNew />} />
                <Route path="/login" element={<PageLogin />} />
                <Route path="/register" element={<PageRegister />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
    )
}
export default function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Body />
        </BrowserRouter>
    )
}

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);