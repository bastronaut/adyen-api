import React from 'react';
import ListGroup from '../../components/ListGroup';

function paymentsCardPresetsTable(props) {

    return (
        <ListGroup {...props} listItems={listItems} id="cardpaymentsPresetsTable" handleClick={props.clickPresetTable} />
    );
}


const listItems = [
    {
        "title": "Visa 25 euro",
        "subtext": "CVC Optional",
        "amount": {
            "currency": "EUR",
            "value": 1000
        },
        "countryCode": "NL",
        "reference": "12345",
        "holderName": "John Smith",
        "number": "4111111145551142",
        "cvc": "737",
        "expiryMonth": "10",
        "expiryYear": "2020",
        "paymentMethod": {
            "type": "ideal",
        },
    },
    {
        "title": "Mastercard 25 euro",
        "subtext": "CVC mandatory",
        "amount": {
            "currency": "EUR",
            "value": 5000
        },
        "countryCode": "NL",
        "reference": "12345",
        "number": "5101180000000007",
        "holderName": "John Doe",
        "cvc": "737",
        "expiryMonth": "10",
        "expiryYear": "2020",
        "paymentMethod": {
            "type": "sceheme",
        },
    },
    {
        "title": "Mastercard 25 euro",
        "subtext": "CVC Optional",
        "amount": {
            "currency": "EUR",
            "value": 2500
        },
        "number": "5555341244441115",
        "holderName": "Jane Doe",
        "countryCode": "NL",
        "reference": "12345",
        "cvc": "737",
        "expiryMonth": "10",
        "expiryYear": "2020",
        "paymentMethod": {
            "type": "sceheme",
        },
    },
    {
        "title": "Amex 10 euro",
        "subtext": "CVC Mandatory",
        "amount": {
            "currency": "EUR",
            "value": 1000
        },
        "number": "370000000000002",
        "holderName": "Jane Doe",
        "countryCode": "NL",
        "reference": "12345",
        "cvc": "737",
        "expiryMonth": "10",
        "expiryYear": "2020",
        "paymentMethod": {
            "type": "sceheme",
        },
    }
]


export default paymentsCardPresetsTable;
