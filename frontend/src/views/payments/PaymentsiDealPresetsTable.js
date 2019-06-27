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
                "value": 10
            },
            "countryCode": "NL",
            "issuer": "1121",
            "reference": "12345",
            "paymentMethod": {
                "type": "ideal",
                "issuer": "1121"
            },
        }
        // {
        //     "title": "Credit Card payment of 20 euro",
        //     "subtext": "Unencrypted",
        //     "amount": {
        //         "currency": "EUR",
        //         "value": 20
        //     },
        //     "countryCode": "CN",
        //     "paymentMethod": {
        //         "type": "scheme",
        //         "number": "4111111111111111",
        //         "expiryMonth": "08",
        //         "expiryYear": "2018",
        //         "holderName": "John Smith",
        //         "cvc": "737",
        //         "storeDetails": true
        //     },
        //     "shopperReference": "yourShopperId_12345",
        // },
        // ,
        // {
        //     "title": "Credit Card payment of 25 euro",
        //     "subtext": "Encrypted fields",
        //     "amount": {
        //         "currency": "EUR",
        //         "value": 20
        //     },
        //     "countryCode": "CN",
        //     "paymentMethod": {
        //         "type": "scheme",
        //         "number": "4111111111111111",
        //         "expiryMonth": "08",
        //         "expiryYear": "2018",
        //         "holderName": "John Smith",
        //         "cvc": "737",
        //         "storeDetails": true
        //     },
        //     "shopperReference": "yourShopperId_12345",
        // },
    ]
    return (
        <ListGroup listItems={listItems} id="paymentsPresetsTable" />
    );
}

export default PaymentsiDealPresetsTable;
