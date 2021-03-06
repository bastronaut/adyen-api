
const sampledata = {
    getPaymentMethods: {
        "groups": [
            {
                "name": "WeChatPay",
                "types": [
                    "wechatpayQR",
                    "wechatpayWeb"
                ]
            },
            {
                "name": "BCMC Mobile",
                "types": [
                    "bcmc_mobile_QR",
                    "bcmc_mobile_app"
                ]
            },
            {
                "name": "Credit Card",
                "types": [
                    "amex",
                    "bcmc",
                    "cup",
                    "maestro",
                    "mc",
                    "visa"
                ]
            }
        ],
        "paymentMethods": [
            {
                "details": [
                    {
                        "key": "number",
                        "type": "text"
                    },
                    {
                        "key": "expiryMonth",
                        "type": "text"
                    },
                    {
                        "key": "expiryYear",
                        "type": "text"
                    },
                    {
                        "key": "cvc",
                        "type": "text"
                    },
                    {
                        "key": "holderName",
                        "optional": true,
                        "type": "text"
                    }
                ],
                "name": "Credit Card",
                "type": "scheme"
            },
            {
                "name": "SEPA Bank Transfer",
                "supportsRecurring": true,
                "type": "bankTransfer_IBAN"
            },
            {
                "details": [
                    {
                        "key": "number",
                        "type": "text"
                    },
                    {
                        "key": "expiryMonth",
                        "type": "text"
                    },
                    {
                        "key": "expiryYear",
                        "type": "text"
                    },
                    {
                        "key": "holderName",
                        "optional": true,
                        "type": "text"
                    }
                ],
                "name": "Bancontact card",
                "supportsRecurring": false,
                "type": "bcmc"
            },
            {
                "name": "BCMC Mobile",
                "supportsRecurring": false,
                "type": "bcmc_mobile_QR"
            },
            {
                "name": "BCMC Mobile",
                "supportsRecurring": false,
                "type": "bcmc_mobile_app"
            },
            {
                "name": "Boleto",
                "supportsRecurring": true,
                "type": "boleto"
            },
            {
                "name": "Boleto Bancario via Santander",
                "supportsRecurring": true,
                "type": "boletobancario_santander"
            },
            {
                "details": [
                    {
                        "key": "number",
                        "type": "text"
                    },
                    {
                        "key": "expiryMonth",
                        "type": "text"
                    },
                    {
                        "key": "expiryYear",
                        "type": "text"
                    },
                    {
                        "key": "cvc",
                        "type": "text"
                    },
                    {
                        "key": "holderName",
                        "optional": true,
                        "type": "text"
                    },
                    {
                        "key": "telephoneNumber",
                        "optional": true,
                        "type": "text"
                    }
                ],
                "name": "ExpressPay",
                "supportsRecurring": true,
                "type": "cup"
            },
            {
                "name": "Online bank transfer.",
                "supportsRecurring": true,
                "type": "directEbanking"
            },
            {
                "name": "BACS Direct Debit",
                "supportsRecurring": true,
                "type": "directdebit_GB"
            },
            {
                "details": [
                    {
                        "items": [
                            {
                                "id": "92",
                                "name": "Bank Sp�?dzielczy w Brodnicy"
                            },
                            {
                                "id": "11",
                                "name": "Bank transfer / postal"
                            },
                            {
                                "id": "74",
                                "name": "Banki Sp�?dzielcze"
                            },
                            {
                                "id": "73",
                                "name": "BLIK"
                            },
                            {
                                "id": "48",
                                "name": "BNP Paribas - P?ac? z ?�?ty"
                            },
                            {
                                "id": "88",
                                "name": "BNP Paribas dawni Klienci Raiffeisen"
                            },
                            {
                                "id": "83",
                                "name": "EnveloBank"
                            },
                            {
                                "id": "55",
                                "name": "erata - dotpay installment"
                            },
                            {
                                "id": "56",
                                "name": "eurobank p?atno?ci online"
                            },
                            {
                                "id": "76",
                                "name": "Getin Bank PBL"
                            },
                            {
                                "id": "81",
                                "name": "Idea Cloud"
                            },
                            {
                                "id": "7",
                                "name": "ING Corporate customers"
                            },
                            {
                                "id": "35",
                                "name": "Kantor Polski"
                            },
                            {
                                "id": "44",
                                "name": "Millennium - P?atno?ci Internetowe"
                            },
                            {
                                "id": "10",
                                "name": "Millennium Corporate customers"
                            },
                            {
                                "id": "24",
                                "name": "mPay"
                            },
                            {
                                "id": "68",
                                "name": "mRaty"
                            },
                            {
                                "id": "1",
                                "name": "mTransfer"
                            },
                            {
                                "id": "91",
                                "name": "Nest Bank"
                            },
                            {
                                "id": "80",
                                "name": "Noble Pay"
                            },
                            {
                                "id": "50",
                                "name": "Pay Way Toyota Bank"
                            },
                            {
                                "id": "45",
                                "name": "Pay with Alior Bank"
                            },
                            {
                                "id": "65",
                                "name": "Paylink Idea Bank"
                            },
                            {
                                "id": "36",
                                "name": "Pekao24Przelew"
                            },
                            {
                                "id": "70",
                                "name": "Pocztowy24"
                            },
                            {
                                "id": "6",
                                "name": "Przelew24"
                            },
                            {
                                "id": "46",
                                "name": "P?ac? z Citi Handlowy"
                            },
                            {
                                "id": "38",
                                "name": "P?ac? z ING"
                            },
                            {
                                "id": "2",
                                "name": "P?ac? z Inteligo"
                            },
                            {
                                "id": "4",
                                "name": "P?ac? z iPKO"
                            },
                            {
                                "id": "72",
                                "name": "P?ac? z Orange"
                            },
                            {
                                "id": "66",
                                "name": "P?ac? z PBS"
                            },
                            {
                                "id": "75",
                                "name": "P?ac? z Plus Bank"
                            },
                            {
                                "id": "51",
                                "name": "P?a? z BO?"
                            },
                            {
                                "id": "52",
                                "name": "SkyCash"
                            },
                            {
                                "id": "60",
                                "name": "T-Mobile us?ugi bankowe"
                            },
                            {
                                "id": "21",
                                "name": "VIA - Moje Rachunki"
                            },
                            {
                                "id": "84",
                                "name": "Volkswagen Bank direct"
                            }
                        ],
                        "key": "issuer",
                        "type": "select"
                    }
                ],
                "name": "Local Polish Payment Methods",
                "supportsRecurring": true,
                "type": "dotpay"
            },
            {
                "name": "Finnish E-Banking",
                "supportsRecurring": true,
                "type": "ebanking_FI"
            },
            {
                "details": [
                    {
                        "key": "bic",
                        "type": "text"
                    }
                ],
                "name": "GiroPay",
                "supportsRecurring": true,
                "type": "giropay"
            },
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
                        "key": "issuer",
                        "type": "select"
                    }
                ],
                "name": "iDEAL",
                "supportsRecurring": true,
                "type": "ideal"
            },
            {
                "name": "Pay later with Klarna.",
                "supportsRecurring": true,
                "type": "klarna"
            },
            {
                "name": "Slice it with Klarna.",
                "supportsRecurring": true,
                "type": "klarna_account"
            },
            {
                "details": [
                    {
                        "items": [
                            {
                                "id": "fpx_bimb",
                                "name": "Bank Islam"
                            },
                            {
                                "id": "fpx_uob",
                                "name": "UOB Bank"
                            },
                            {
                                "id": "fpx_cimbclicks",
                                "name": "CIMB Clicks"
                            },
                            {
                                "id": "fpx_kfh",
                                "name": "Kuwait Finance House"
                            },
                            {
                                "id": "fpx_rhb",
                                "name": "RHB Now"
                            },
                            {
                                "id": "fpx_abmb",
                                "name": "Alliance Bank"
                            },
                            {
                                "id": "fpx_hsbc",
                                "name": "HSBC"
                            },
                            {
                                "id": "fpx_amb",
                                "name": "Am Online"
                            },
                            {
                                "id": "fpx_ocbc",
                                "name": "OCBC Bank"
                            },
                            {
                                "id": "fpx_abb",
                                "name": "Affin Bank"
                            },
                            {
                                "id": "fpx_scb",
                                "name": "Standard Chartered Bank"
                            },
                            {
                                "id": "fpx_pbb",
                                "name": "Public Bank"
                            },
                            {
                                "id": "fpx_bsn",
                                "name": "Bank Simpanan Nasional"
                            },
                            {
                                "id": "fpx_bmmb",
                                "name": "Bank Muamalat"
                            },
                            {
                                "id": "fpx_hlb",
                                "name": "Hong Leong Connect"
                            },
                            {
                                "id": "fpx_mb2u",
                                "name": "Maybank2u"
                            },
                            {
                                "id": "fpx_bkrm",
                                "name": "Bank Rakyat"
                            }
                        ],
                        "key": "issuer",
                        "type": "select"
                    }
                ],
                "name": "Malaysia E-Banking",
                "supportsRecurring": true,
                "type": "molpay_ebanking_fpx_MY"
            },
            {
                "name": "Multibanco",
                "supportsRecurring": true,
                "type": "multibanco"
            },
            {
                "details": [
                    {
                        "items": [
                            {
                                "id": "1",
                                "name": "Model Bank v2"
                            }
                        ],
                        "key": "issuer",
                        "type": "select"
                    }
                ],
                "name": "Online banking",
                "supportsRecurring": false,
                "type": "openbanking_UK"
            },
            {
                "name": "POLi",
                "supportsRecurring": true,
                "type": "poli"
            },
            {
                "details": [
                    {
                        "key": "sepa.ownerName",
                        "type": "text"
                    },
                    {
                        "key": "sepa.ibanNumber",
                        "type": "text"
                    }
                ],
                "name": "SEPA Direct Debit",
                "supportsRecurring": true,
                "type": "sepadirectdebit"
            },
            {
                "details": [
                    {
                        "key": "number",
                        "type": "text"
                    },
                    {
                        "key": "expiryMonth",
                        "optional": true,
                        "type": "text"
                    },
                    {
                        "key": "expiryYear",
                        "optional": true,
                        "type": "text"
                    },
                    {
                        "key": "cvc",
                        "optional": true,
                        "type": "text"
                    },
                    {
                        "key": "holderName",
                        "optional": true,
                        "type": "text"
                    }
                ],
                "name": "SVS",
                "supportsRecurring": false,
                "type": "svs"
            },
            {
                "name": "UnionPay",
                "supportsRecurring": true,
                "type": "unionpay"
            },
            {
                "name": "WeChat Pay",
                "supportsRecurring": true,
                "type": "wechatpayQR"
            },
            {
                "name": "WeChat Pay",
                "supportsRecurring": true,
                "type": "wechatpayWeb"
            }
        ]
    },
    getPaymentMethodsActual: {
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
};

module.exports = sampledata




