import React, { Component } from 'react'
// import api from '../api'

import Styled from 'styled-components'

const RegisterCustomStyle = Styled.div.attrs({
})`

html,
body {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="top"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="middle"] {
    margin-bottom: -1px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

.form-signin input[type="bottom"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
`

class PageRegister extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            username: '',
            password: '',
            error: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleChange = ({ currentTarget: input }) => {
        this.setState({ [input.name]: input.value });
    };

    handleRegister = () => {
        const { _username, _password } = this.state
    }

    render() {
        const { email, username, password, _error } = this.state
        return (
            <RegisterCustomStyle>
                <main className="form-signin w-100 m-auto">
                    <section className="container">
                        <section className="row py-lg-5">
                            <form>
                                <h1 className="h3 mb-3 fw-normal">Register</h1>

                                <div className="form-floating">
                                    <input
                                        type="top"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="name@example.com"
                                        onChange={(text) => { this.handleChange(text) }}
                                        value={email}
                                        name="email" />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating">
                                    <input
                                        type="middle"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="ExampleUser"
                                        onChange={(text) => { this.handleChange(text) }}
                                        value={username}
                                        name="username" />
                                    <label htmlFor="floatingInput">Username</label>
                                </div>
                                <div className="form-floating">
                                    <input
                                        type="bottom"
                                        className="form-control"
                                        id="floatingPassword"
                                        placeholder="Password"
                                        onChange={(text) => { this.handleChange(text) }}
                                        value={password}
                                        name="password" />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>

                                <div className="d-grid gap-2">
                                    <a href="/register" className="w-100 btn btn-lg btn-primary" role="button">Register</a>
                                </div>

                            </form>

                        </section>
                    </section>
                </main>
            </RegisterCustomStyle>
        )
    }
}

export default PageRegister;

