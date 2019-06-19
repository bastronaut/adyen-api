import React from 'react';
import ListGroup from '../../components/ListGroup';

function GetPaymentsPresetsTable(props) {
    const listItems = [
        {
            "amount": 50,
            "countryCode": "NL",
            "currency": "EUR",
            "title": "NL 50 Euro",
        },
        {
            "amount": 1000,
            "countryCode": "CN",
            "currency": "CNY",
            "title": "China 1000 CNY",
        },
    ]
    return (
        <ListGroup listItems={listItems} id="getPaymentMethodsPresetsTable" />
    );
}

export default GetPaymentsPresetsTable;
