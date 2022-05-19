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

class PageRegister extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }

    }

    render() {
        return (
            <RegisterCustomStyle>
                <main className="form-signin w-100 m-auto">
                    <section className="container">
                        <section className="row py-lg-5">
                            <form>
                                <h1 className="h3 mb-3 fw-normal">Register</h1>

                                <div className="form-floating">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>

                                <div class="d-grid gap-2">
                                    <a href="/register" className="w-100 btn btn-lg btn-primary" role="button">Register</a>
                                    <a href="/login" className="w-100 btn btn-lg btn-dark" role="button">Login</a>
                                </div>
                                <p className="mt-5 mb-3 text-muted">© 2017–2022</p>

                            </form>

                        </section>
                    </section>
                </main>
            </RegisterCustomStyle>
        )
    }
}

export default PageRegister;

