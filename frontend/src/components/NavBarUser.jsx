import React, { Component } from 'react'
// import Styled from 'styled-components'

class NavBarUser extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token");

        const isLoggedIn = token != null ? true : false;

        this.state = {
            token: token,
            isLoggedIn: isLoggedIn
        }
    }
    render() {
        const { isLoggedIn } = this.state;
        return (
            <div className="text-end">
                {!isLoggedIn ?
                    <div>
                        <button type="button" className="btn btn-outline-light me-2"
                            onClick={() => {window.location.href = "/login"}}>Login</button>
                        <button type="button" className="btn btn-warning"
                            onClick={() => {window.location.href = "/register"}}>Register</button>
                    </div>
                    : <button type="button" className="btn btn-outline-light me-2"
                        onClick={() => { window.location.href = "/logout"}}>Logout</button>}


            </div>
        )
    }
}

export default NavBarUser