import React from 'react';
import ListGroup from '../../components/ListGroup';

function PaymentsiDealPresetsTable(props) {

    return (
        <ListGroup {...props} listItems={listItems} id="paymentsPresetsTable" handleClick={props.clickPresetTable} />
    );
}


const listItems = [
    {
        "title": "iDEAL payment of 10 euro",
        "subtext": "in NL, issuer 1121",
        "amount": {
            "currency": "EUR",
            "value": 10
        },
        "countryCode": "NL",
        "reference": "12345",
        "paymentMethod": {
            "type": "ideal",
            "issuer": "1121"
        },
    },
    {
        "title": "iDEAL payment of 50 euro",
        "subtext": "in NL, issuer 1154",
        "amount": {
            "currency": "EUR",
            "value": 50
        },
        "countryCode": "NL",
        "reference": "12345",
        "paymentMethod": {
            "type": "ideal",
            "issuer": "1154"
        },
    }
]


export default PaymentsiDealPresetsTable;
