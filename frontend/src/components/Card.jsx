// import React, { Component } from 'react'
// import Styled from 'styled-components'


export default function Card(props) {
    return (
        <div className="card">
            {props.header &&
                <h5 className="card-header">{props.header}</h5>
            }
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
}