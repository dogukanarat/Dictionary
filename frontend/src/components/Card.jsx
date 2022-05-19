// import React, { Component } from 'react'
// import Styled from 'styled-components'


export default function Card(props) {
    return (
        <div class="card">
            {props.header &&
                <h5 class="card-header">{props.header}</h5>
            }
            <div class="card-body">
                {props.children}
            </div>
        </div>
    )
}