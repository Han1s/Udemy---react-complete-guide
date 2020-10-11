import React from 'react'

const UserOutput = ( props ) => {
    let style = {
        backgroundColor: 'grey',
        border: '2px solid green',
        padding: '16px',
        textAlign: 'center',
    }

    return (
        <div style={style}>
            <p>Hello world!</p>
            <p>My name is {props.name}</p>
        </div>
    )
}

export default UserOutput;