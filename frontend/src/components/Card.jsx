import React, { Component } from 'react'
import Styled from 'styled-components'

const CardWrapper = Styled.div.attrs({
    className: 'card',
})`
`

const CardHeader = Styled.div.attrs({
    className: 'card-header',
})`
`

const Title = Styled.p.attrs({
    className: 'h4',
})`
`

const CardBody = Styled.div.attrs({
    className: 'card-body',
})`
`

export default function Card(props) {
    return (
        <CardWrapper>
            {props.header &&
                <CardHeader>
                    <Title>
                    {props.header}
                    </Title>
                </CardHeader>
            }
            <CardBody>
                {props.children}
            </CardBody>
        </CardWrapper>
    )
}