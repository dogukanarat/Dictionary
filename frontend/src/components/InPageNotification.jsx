import React, { Component } from 'react'
import Styled from 'styled-components'

const InPageNotificationWrapper = Styled.div.attrs({
    className: 'alert',
})`
`

const InPageNotification = (props) => {

    const [show, setShow] = React.useState(true)

    React.useEffect(() => {
        const timeId = setTimeout(() => {
            setShow(false)
        }, 3000)

        return () => {
            clearTimeout(timeId)
        }
    }, []);

    if (!show) {
        return null;
    }

    return (
        <InPageNotificationWrapper className={` alert-${props.variant}`}>
            {props.children}
        </InPageNotificationWrapper>
    )
}

InPageNotification.defaultPros = {
    variant: 'info',
}

export default InPageNotification;