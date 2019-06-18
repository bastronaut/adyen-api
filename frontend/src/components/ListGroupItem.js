
import React from 'react';

const ListGroupItem = (props) => (
    <li class={"list-group-item d-flex justify-content-between lh-condensed " + props.customClass ? props.customClass : ""}>
        <div>
            <h6 class="my-0">{props.title}</h6>
            <small class="text-muted">{props.subtext}</small>
        </div>
        <span class="text-muted">{props.mutedtext}</span>
    </li>

);


export default ListGroupItem;



