import React from 'react';

function Alert(props) {

    let displayText;

    if (typeof props.text === 'object' && props.text.constructor === Object) {
        displayText = JSON.stringify(props.text, null, 2);
    } else {
        displayText = props.text;
    }

    console.log(displayText);

    return (
        <div className={"alert alert-" + (props.customClass ? props.customClass : "primary")} id={props.id} role="alert">
            <pre>{displayText}</pre>
        </div>
    );
}

export default Alert;


