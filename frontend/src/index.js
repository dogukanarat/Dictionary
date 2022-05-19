import ReactDOM from 'react-dom/client';
import React from 'react'
// import Styled from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components'
import { PagePostList, PagePostNew, PageLogin, PageRegister } from './pages'

import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => {
    return (
        <main className="flex-shrink-0">
            <div className="container">
                <h1 className="mt-5">Simple Dictionary Website</h1>
                <p className="lead">This is a simple Eksisozluk clone</p>
            </div>
        </main>
    )
}
const NoPage = () => {
    return (
        <main className="flex-shrink-0">
            <div className="container">
                <h1 className="mt-5">No Page Found</h1>
            </div>
        </main>
    )
}

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