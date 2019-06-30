import React from 'react';
import ListGroup from '../../components/ListGroup';

function PaymentsiDealPresetsTable(props) {
    const listItems = [
        {
            "title": "iDEAL payment of 10 euro",
            "subtext": "in NL, issuer 1121",
            "amount": {
                "currency": "EUR",
                "value": 10
            },
            "countryCode": "NL",
            "issuer": "1121",
            "reference": "12345",
            "paymentMethod": {
                "type": "ideal",
                "issuer": "1121"
            },
        },
        {
            "title": "iDEAL payment of 50 euro",
            "subtext": "in NL, issuer 1123",
            "amount": {
                "currency": "EUR",
                "value": 50
            },
            "countryCode": "NL",
            "issuer": "1121",
            "reference": "12345",
            "paymentMethod": {
                "type": "ideal",
                "issuer": "1121"
            },
        }
    ]
    return (
        <ListGroup listItems={listItems} id="paymentsPresetsTable" />
    );
}

export default PaymentsiDealPresetsTable;
