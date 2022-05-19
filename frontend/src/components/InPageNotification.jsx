import React from 'react'
// import Styled from 'styled-components'

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
        <div className={`alert alert-${props.variant}`}>
            {props.children}
        </div>
    )
}

InPageNotification.defaultPros = {
    variant: 'info',
}

export default InPageNotification;