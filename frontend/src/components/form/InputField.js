import React from 'react';

function InputField(props) {
  return (
    <input type="text" className={"form-control " + props.customClass} 
    id={props.id} 
    placeholder={props.placeholder} 
    value={props.value} 
    onChange={props.updateValue} />
  );
}

export default InputField;
