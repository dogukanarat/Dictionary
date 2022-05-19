import React, { Component } from 'react'
// import Styled from 'styled-components'

class NavBarSearch extends Component {
    render() {
        return (
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                <input
                    type="search"
                    className="form-control form-control-dark text-white bg-dark"
                    placeholder="Search..."
                    aria-label="Search" />
            </form>
        )
    }
}

export default NavBarSearch