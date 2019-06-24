import React from 'react';
import ListGroupItem from './ListGroupItem';

const ListGroup = (props) => (
    <ul className={'list-group list-group-mb-3 ' + (props.customClass ? props.customClass : '')} id={props.id}>
        {props.listItems.map((item, i) =>
            <ListGroupItem item={item} key={('item-' + i)} {...props} />
        )}
    </ul>
);


export default ListGroup;
