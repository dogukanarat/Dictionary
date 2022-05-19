import { Component } from 'react'
import api from '../api'
import Styled from 'styled-components'

import { InPageNotification } from '../components'

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

.form-signin input[attribute="top"]  {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[attribute="middle"]  {
    margin-bottom: -1px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

.form-signin input[attribute="bottom"] {
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
            isExist: false,
            isInvalidInput: false,
            isSuccess: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleChange = ({ currentTarget: input }) => {
        this.setState({ [input.name]: input.value });
    };

    handleRegister = () => {
        const { email, username, password } = this.state

        const payload =
        {
            "email": email,
            "username": username,
            "password": password
        }

        try {
            api.register(payload)
                .then((_res) => {

                    this.setState({
                        isSuccess: true
                    })

                })
                .catch((error) => {

                    if (error.response.status === 409) {
                        this.setState({ isExist: true })
                    }

                    if (error.response.status === 400) {
                        this.setState({ isInvalidInput: true })
                    }

                    if (
                        error.response &&
                        error.response.status >= 400 &&
                        error.response.status <= 500
                    ) {

                    }
                })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        const { email, username, password, isExist, isInvalidInput, isSuccess } = this.state
        return (
            <RegisterCustomStyle>
                <main className="form-signin w-100 m-auto">
                    <section className="container">
                        {isExist &&
                            <InPageNotification variant="danger">
                                Email address is already registered!
                            </InPageNotification>
                        }

                        {isInvalidInput &&
                            <InPageNotification variant="danger">
                                Invalid input!
                            </InPageNotification>
                        }

                        {isSuccess &&
                            <InPageNotification variant="success">
                                Successfully registered!
                            </InPageNotification>
                        }
                        <section className="row py-lg-5">
                            <form>
                                <h1 className="h3 mb-3 fw-normal">Register</h1>

                                <div className="form-floating">
                                    <input
                                        attribute="top"
                                        type="text"
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
                                        attribute="middle"
                                        type="text"
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
                                        attribute="bottom"
                                        type="password"
                                        className="form-control"
                                        id="floatingPassword"
                                        placeholder="Password"
                                        onChange={(text) => { this.handleChange(text) }}
                                        value={password}
                                        name="password" />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>

                                <div className="d-grid gap-2">
                                    <button
                                        className="w-100 btn btn-lg btn-primary"
                                        type="button"
                                        onClick={() => { this.handleRegister() }}>
                                        Register
                                    </button>
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

