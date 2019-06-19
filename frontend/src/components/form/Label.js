import React from 'react';

function Label(props) {
    return (
        <label for={props.for}>{props.text}</label>
    );
}

export default Label;
