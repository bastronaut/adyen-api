
import React from 'react';
import ListGroupItem from './ListGroupItem';






const ListGroup = (props) => (
    <ul className={"list-group-mb-3 " + props.customClass}>
        {props.listItems.map((item, i) =>
            <ListGroupItem {...item} />
        )}
    </ul>
);


export default ListGroup;


<li class="list-group-item d-flex justify-content-between lh-condensed">
    <div>
        <h6 class="my-0">Third item</h6>
        <small class="text-muted">Brief description</small>
    </div>
    <span class="text-muted">$5</span>
</li>

