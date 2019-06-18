import React from 'react';

function TextArea(props) {
  return (
    <textarea name={props.name} class={props.customClass} id={props.id}> {props.placeholder} </textarea>
  );
}

export default TextArea;
