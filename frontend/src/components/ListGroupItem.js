
import React from 'react';

const ListGroupItem = (props) => (
    <li className={"list-group-item d-flex justify-content-between lh-condensed " + (props.customClass ? props.customClass : "")}
        onClick={() => props.handleClick(props.item)}
    >
        <div>
            <h6 className="my-0">{props.item.title}</h6>
            <small className="text-muted">{props.item.subtext}</small>
        </div>
        <span className="text-muted">{props.item.mutedtext}</span>
    </li>

);


export default ListGroupItem;



