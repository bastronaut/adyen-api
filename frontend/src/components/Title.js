import React from 'react';

function Title(props) {

    switch (props.type) {
        case "h1":
            return (
                <h1 className={props.customClass} >{props.text}</h1>
            );

        case "h2":
            return (
                <h2 className={props.customClass}>{props.text}</h2>
            );

        case "h3":
            return (
                <h3 className={props.customClass}>{props.text}</h3>
            );

        case "h4":
            return (
                <h4 className={props.customClass}>{props.text}</h4>
            );
        default:
            return (<h1 className={props.customClass}>{props.text}</h1>);
    }
}



export default Title;
