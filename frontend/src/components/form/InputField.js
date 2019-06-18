import React from 'react';

function InputField(props) {
  return (
    <input type="text" class={"form-control " + props.customClass} id={props.id} placeholder={props.placeholder} />
  );
}

export default InputField;
