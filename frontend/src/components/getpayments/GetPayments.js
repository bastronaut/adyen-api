
import React from 'react';
import InputField from '../form/InputField';
import Select from '../form/Select';
import TextArea from '../form/TextArea';

function GetPayments(props) {
    return (
        <div>
            <InputField placeholder="yo" />
            <InputField placeholder="hey" />
            <InputField placeholder="yes" />
            <button type="button" className="btn btn-primary">Primary</button>
        </div>
    );
}

export default GetPayments;


