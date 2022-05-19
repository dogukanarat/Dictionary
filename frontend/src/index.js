import ReactDOM from 'react-dom/client';
import React from 'react'
// import Styled from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components'
import { PagePostList, PagePostNew, PageLogin, PageRegister, PagePost } from './pages'

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

const Logout = () => {
    localStorage.removeItem("token");

    React.useEffect(() => {

        const timeId = setTimeout(() => {
            return window.location.href = "/"
        }, 3000)

        return () => {
            clearTimeout(timeId)
        }
    }, []);

    return (
        <main className="flex-shrink-0">
            <div className="container">
                <h1 className="mt-5">Logout successfully! Redirecting...</h1>
            </div>
        </main>
    )
}

const LogoutImmediate = () => {
    localStorage.removeItem("token");
    window.location.href = "/"

    return (
        <main className="flex-shrink-0">
            <div className="container">
                <h1 className="mt-5">Redirecting...</h1>
            </div>
        </main>
    )
}

function Body() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/post/:postId" element={<PagePost />} />
            <Route path="/post/list" element={<PagePostList />} />
            <Route path="/post/new" element={<PagePostNew />} />
            <Route path="/login" element={<PageLogin />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/logoutImmediately" element={<LogoutImmediate />} />
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