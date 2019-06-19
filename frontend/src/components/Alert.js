import React from 'react';

function Alert(props) {

    return (
        <div className={"alert alert-" + (props.customClass ? props.customClass : "primary")} id={props.id} role="alert">
            {props.text}
        </div>
    );
}

export default Alert;


