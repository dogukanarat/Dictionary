import React, { Component } from 'react'
import api from '../api'
import Styled from 'styled-components'

import { InPageNotification } from '../components'

const LoginCustomStyle = Styled.div.attrs({
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

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
`

class PageLogin extends Component {
    constructor(props) {
        super(props)

        const token = window.localStorage.getItem("token");

        if(token != null) {
            window.location.href = '/post/list'
        }

        this.state = {
            token: token,
            username: '',
            password: '',
            incorrectInput: false,
        }

        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    componentDidUpdate() {
        const token = window.localStorage.getItem("token");

        console.log("componentDidUpdate; Token: ", token)

        if(token != null) {
            window.location.href = '/post/list'
        }
    }

    handleChangeUsername = async (event) => {
        const { value } = event.target;
        this.setState({ username: value })
    }

    handleChangePassword = async (event) => {
        const { value } = event.target;
        this.setState({ password: value })
    }

    handleLogin = async (_event) => {
        const { username, password } = this.state;

        const payload =
        {
            "username": username,
            "password": password
        }

        console.log(payload)

        try {
            await api.auth(payload)
                .then((res) => {
                    const { data } = res.data

                    window.localStorage.setItem("token", data);

                    this.setState({
                        token: data,
                        username: '',
                        password: ''
                    })

                    console.log("apiResponsed; Token: ", data)
                })
                .catch((error) => {
                    if (
                        error.response &&
                        error.response.status >= 400 &&
                        error.response.status <= 500
                    ) {
                        this.setState({ incorrectInput: true })
                        console.log("incorrect input")
                    }
                })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        const { username, password, incorrectInput } = this.state;
        return (

            <LoginCustomStyle>
                <main className="form-signin w-100 m-auto">
                    <section className="container">
                        {incorrectInput &&
                            <InPageNotification variant="danger">
                                Incorrect username or password!
                            </InPageNotification>
                        }

                        <section className="row py-lg-5">
                            <form>
                                <h1 className="h3 mb-3 fw-normal">Login</h1>

                                <div className="form-floating">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="username"
                                        onChange={(text) => { this.handleChangeUsername(text) }}
                                        value={username} />
                                    <label htmlFor="floatingInput">Username</label>
                                </div>
                                <div className="form-floating">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="floatingPassword"
                                        placeholder="Password"
                                        onChange={(text) => { this.handleChangePassword(text) }}
                                        value={password} />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>

                                <div className="checkbox mb-3">
                                    <label>
                                        <input type="checkbox" value="remember-me" /> Remember me
                                    </label>
                                </div>

                                <div className="d-grid gap-2">
                                    <button
                                        className="w-100 btn btn-lg btn-primary"
                                        onClick={() => { this.handleLogin() }}
                                        type="button">
                                        Login
                                    </button>
                                    <button
                                        className="w-100 btn btn-lg btn-dark"
                                        type="button">
                                        Register
                                    </button>
                                </div>

                                <p className="mt-5 mb-3 text-muted">© 2017–2022</p>

                            </form>

                        </section>
                    </section>
                </main>
            </LoginCustomStyle>
        )
    }
}

export default PageLogin;

