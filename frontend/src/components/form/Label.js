import React from 'react';

function Label(props) {
    return (
        <label htmlFor={props.for}>{props.text}</label>
    );
}

export default Label;
