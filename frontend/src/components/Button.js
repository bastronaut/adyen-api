import React from 'react';

function Button(props) {

    return (
        <button type={props.type ? props.type : "button"} className={"btn btn-" + (props.customClass ? props.customClass : "primary")}>{props.text}</button>
    );
}

export default Button;
