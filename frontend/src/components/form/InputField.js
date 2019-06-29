import React from 'react';

function InputField(props) {

  if (props.disabled) {

    return (
      <input type="text" className={"form-control " + props.customClass}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.updateValue}
        disabled
      />
    );

  } else {
    return (
      <input type="text" className={"form-control " + props.customClass}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.updateValue}
      />
    );
  }
}

export default InputField;
