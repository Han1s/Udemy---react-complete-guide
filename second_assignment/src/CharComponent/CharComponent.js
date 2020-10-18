import React from 'react';

const CharComponent = (props) => {
    let style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'cetner',
        margin: '16px',
        border: '1px solid black',
    }
    
    return(
        <span style={style} onClick={props.click}>{ props.letter }</span>
    )
}

export default CharComponent;