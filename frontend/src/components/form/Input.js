import React from 'react';
import InputField from './InputField';
import Label from './Label';


function Input(props) {
    return (
        <div className="mb-3">
            <Label htmlFor={props.id} text={props.label} />
            <InputField {...props} />
        </div>
    );
}

export default Input;
