import React from 'react';

const ValidationComponent = (props) => {
    let output = '';
    if (props.inputLength >= 5) {
        output = 'Text long enough.'
    } else {
        output = 'Text too short.'
    }

    return (
        <p>{output}</p>
    )
}

export default ValidationComponent;