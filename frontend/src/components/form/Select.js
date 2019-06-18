import React from 'react';

function Select(props) {

    var options = props.options.map((option, i) =>
        <option value={option.value} key={i} >{option.label} </option>
    )


    return (
        <select class={props.customClass} id={props.id} required={props.required}>
            {options}
        </select>
    );
}

export default Select;



