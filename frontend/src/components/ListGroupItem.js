
import React from 'react';

const ListGroupItem = (props) => (
    <li className={"list-group-item d-flex justify-content-between lh-condensed " + (props.customClass ? props.customClass : "")}>
        <div>
            <h6 className="my-0">{props.title}</h6>
            <small className="text-muted">{props.subtext}</small>
        </div>
        <span className="text-muted">{props.mutedtext}</span>
    </li>

);


export default ListGroupItem;



