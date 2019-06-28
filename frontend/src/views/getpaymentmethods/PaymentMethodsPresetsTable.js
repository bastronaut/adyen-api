import React from 'react';
import ListGroup from '../../components/ListGroup';



function GetPaymentsPresetsTable(props) {
    return (
        <ListGroup {...props} listItems={listItems} id="getPaymentMethodsPresetsTable" handleClick={props.clickPresetTable} />
    );
}

const listItems = [
    {
        "amountValue": 5000,
        "countryCode": "NL",
        "currency": "EUR",
        "title": "NL 50 Euro",
        "subtext": "Amount with 2 decimals",
        "expectedResponse": {
            "paymentMethods": [
                {
                    "details": [
                        {
                            "items": [
                                {
                                    "id": "1121",
                                    "name": "Test Issuer"
                                },
                                {
                                    "id": "1154",
                                    "name": "Test Issuer 5"
                                },
                                {
                                    "id": "1153",
                                    "name": "Test Issuer 4"
                                },
                                {
                                    "id": "1152",
                                    "name": "Test Issuer 3"
                                },
                                {
                                    "id": "1151",
                                    "name": "Test Issuer 2"
                                },
                                {
                                    "id": "1162",
                                    "name": "Test Issuer Cancelled"
                                },
                                {
                                    "id": "1161",
                                    "name": "Test Issuer Pending"
                                },
                                {
                                    "id": "1160",
                                    "name": "Test Issuer Refused"
                                },
                                {
                                    "id": "1159",
                                    "name": "Test Issuer 10"
                                },
                                {
                                    "id": "1158",
                                    "name": "Test Issuer 9"
                                },
                                {
                                    "id": "1157",
                                    "name": "Test Issuer 8"
                                },
                                {
                                    "id": "1156",
                                    "name": "Test Issuer 7"
                                },
                                {
                                    "id": "1155",
                                    "name": "Test Issuer 6"
                                }
                            ],
                            "key": "idealIssuer",
                            "type": "select"
                        }
                    ],
                    "name": "iDEAL",
                    "type": "ideal"
                },
                {
                    "details": [
                        {
                            "key": "additionalData.card.encrypted.json",
                            "type": "cardToken"
                        }
                    ],
                    "name": "Credit Card",
                    "type": "scheme"
                }
            ]
        }
    },
    {
        "amountValue": 8000,
        "countryCode": "GB",
        "currency": "GBP",
        "title": "UK 80 Pound Sterling",
        "subtext": "Amount with 2 decimals",
        "expectedResponse": {
            "paymentMethods": [
                {
                    "details": [
                        {
                            "key": "additionalData.card.encrypted.json",
                            "type": "cardToken"
                        }
                    ],
                    "name": "Credit Card",
                    "type": "scheme"
                }
            ]
        }
    },
    {
        "amountValue": 10000,
        "countryCode": "CN",
        "currency": "CNY",
        "title": "China 100 CNY",
        "subtext": "Amount with 2 decimals",
        "expectedResponse": {
            "paymentMethods": [
                {
                    "details": [
                        {
                            "key": "additionalData.card.encrypted.json",
                            "type": "cardToken"
                        }
                    ],
                    "name": "Credit Card",
                    "type": "scheme"
                },
                {
                    "name": "WeChat Pay",
                    "type": "wechatpay"
                }
            ]
        }
    },
]







export default GetPaymentsPresetsTable;
