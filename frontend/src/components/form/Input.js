import React from 'react';
import InputField from './InputField';
import Label from './Label';


function Input(props) {
    return (
        <div className="mb-3">
            <Label for={props.id} text={props.label} />
            <InputField placeholder={props.placeHolder} id={props.id} />
        </div>
    );
}

export default Input;
