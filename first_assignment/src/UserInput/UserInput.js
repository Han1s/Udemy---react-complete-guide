import React from 'react';
import './UserInput.css'

const UserInput = (props) => {

    return (
        <input 
            onChange={props.onChange} 
            id='user-input' 
            placeholder="First React Assignment"
            type="text"
            value={props.value}>
        </input>
    )
}

export default UserInput;