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
        "expectedResponse": {
            "resultCode": "RedirectShopper",
            "details": [
                {
                    "key": "returnUrlQueryString",
                    "type": "text"
                }
            ],
            "paymentData": "Ab02b4c0!BQABAgB0HvpPL6E7vhi9CfhfoTrKVcBYMyGz7dhKzy5JMtA8Dtqx74mknd+A5uL4rJuDVJWsCAPLUvFO7zRIs2TxrRqSf9vYD9sxkIRtPK2IWpXlubIoaHSZTyXryvgQTNikApo3ZIKzkrv2VoA67ztSM3OhZesYgUaaKmxplAie/zOt7ZY5LYv8X/3THucJvn/gm4m7fJUm0BOl21GxnaYMV2t3s9nqnhVtotYUcy6wf9L8UoYilJGkD7Qq94lrYa22sYHDLMkCYnzgTIRtoUuHAWvKR4dvqIASdQfywW69z2MtmqOzcihJuSTz9SUoL58LKvxJKEtshHYgUphE/3oKsa2R2gDqyt+EZJGdcdBN+2KLhPLNzJu4+Q0JAgQRp3sxYOufsV5wFABNvN01mziBEPkd4sC2uLLI1eJhzznbGDK/5u8xSxG9r23y5MGFY9pLS11yhJakSzS0iVKI+QxzWkq11lGoybYDHqK7E0bNjHl+i9XcdrSTdgMXsDRn//KqL9lsxM3Sjya2Bd5eh5wakaKtxoXtgArZapxoDFYu0cXyq5FOsBjbkJpHhc77ZDjf5gGAV2RSAJyyvHk/1qkhFQlK4YuY74odYu3WEOg6rNOKp/ITqwsgRPtNurOG/TLhY65mWztJKqxxC4CcXxTuhOchkvQL8mZ1S+LNA78TTOk6vRCvTJ4VGOE1ssVf3OPapIJmAEp7ImtleSI6IkFGMEFBQTEwM0NBNTM3RUFFRDg3QzI0REQ1MzkwOUI4MEE3OEE5MjNFMzgyM0Q2OERBQ0M5NEI5RkY4MzA1REMifZT7YuH0vZVmPYpiomHuQaUcQh5qw9zUWqGoev4eKJG0Wt0brVjN1HAwBJ2BXnd9Ffs6iKtoSLED3yepHHBkI3MjPjC5mRcLc6Uk/Alusr79mxl+Gar+pVD6IkoO7hkRMcb70f4NQ/DBmkm2Hnq0dL33FfBO3ADIDpxjoPtB0/RctY6P8hfNIoZJMgUa/J5+A0Zg5wkuvDKss6vWx6Knpao8PodprWwWKgUzhui/amx/kCOnu5ef83KHEQivZ2fGEsoo7eVO4odv4++hwdc3r3otehRpw1hvEuPmJvmGaArvEXuYS5JDvR/P/bvpq37Gi0x/yQyjfSjbs3s7+6ouf91tZfO8nTPXjr4xGYvekZo0HydQ209h2HK+Y07RH9u0jMlrNQTgUWjuFw7PGDgzob+ZoYEupEMi4EibKp6zsFXDPJyZN1m5d2hljaO03CS3V/U/FI6qxqk4GT1ma0Mpi+8p4untfuhr3f9CmhbZQXY8NrfnPRJwTXtbAU2sY5O8ws8A0ebwH7Sd2s3PcEYNu2OMhTE1GqEVqkkcHnVfllTyCHKh8T+SrOeinl1z6cwJY8doaIG8X4nb1j9GF2B1Ni7VurD0RZbKlguqUq7LahnKQRpafBUX27Fgx4YHQ+NSjYUvndYOfVA6ylz1JeI/reWrlJou38hkbwuAPh2wBXtlOkXhoSjWGmBZfNeRrdahDLK2Fu2L5EuQ3Y063yRFkqZSCVaQRV6ua2dPpbK6DJmArMCTn0MkbVa/klelOgqZDY+99TfjBXg13X/OMBM=",
            "redirect": {
                "method": "GET",
                "url": "https://test.adyen.com/hpp/redirectIdeal.shtml?brandCode=ideal&currencyCode=EUR&issuerId=1121&merchantAccount=Bastronaut-ecom&merchantIntegration.type=CHECKOUT_GENERIC&merchantIntegration.version=30&merchantReference=12345&merchantReturnData=881562011754598C&merchantSig=wdMajb2Sy72MQ1Mi2Qx8eZAj5Mdn5m9uNRU4BKLu7ok%3D&paymentAmount=10&resURL=https%3A%2F%2Fcheckoutshopper-test.adyen.com%2Fcheckoutshopper%2Fservices%2FPaymentIncomingRedirect%2Fv1%2FlocalPaymentMethod%3FmerchantAccount%3DBastronaut-ecom%26returnURL%3Dhttp%253A%252F%252Fbastronaut.dev%252Fpayment%252F12345&sessionValidity=2019-07-01T21%3A09%3A15Z&skinCode=pub.v2.8015595552162642.bDEZRw6JUC6gf4G1BzEDkdR_GDxkPfO8BKljM-nCzsU"
            }
        }
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
        "expectedResponse": {
            "resultCode": "RedirectShopper",
            "details": [
                {
                    "key": "returnUrlQueryString",
                    "type": "text"
                }
            ],
            "paymentData": "Ab02b4c0!BQABAgB0HvpPL6E7vhi9CfhfoTrKVcBYMyGz7dhKzy5JMtA8Dtqx74mknd+A5uL4rJuDVJWsCAPLUvFO7zRIs2TxrRqSf9vYD9sxkIRtPK2IWpXlubIoaHSZTyXryvgQTNikApo3ZIKzkrv2VoA67ztSM3OhZesYgUaaKmxplAie/zOt7ZY5LYv8X/3THucJvn/gm4m7fJUm0BOl21GxnaYMV2t3s9nqnhVtotYUcy6wf9L8UoYilJGkD7Qq94lrYa22sYHDLMkCYnzgTIRtoUuHAWvKR4dvqIASdQfywW69z2MtmqOzcihJuSTz9SUoL58LKvxJKEtshHYgUphE/3oKsa2R2gDqyt+EZJGdcdBN+2KLhPLNzJu4+Q0JAgQRp3sxYOufsV5wFABNvN01mziBEPkd4sC2uLLI1eJhzznbGDK/5u8xSxG9r23y5MGFY9pLS11yhJakSzS0iVKI+QxzWkq11lGoybYDHqK7E0bNjHl+i9XcdrSTdgMXsDRn//KqL9lsxM3Sjya2Bd5eh5wakaKtxoXtgArZapxoDFYu0cXyq5FOsBjbkJpHhc77ZDjf5gGAV2RSAJyyvHk/1qkhFQlK4YuY74odYu3WEOg6rNOKp/ITqwsgRPtNurOG/TLhY65mWztJKqxxC4CcXxTuhOchkvQL8mZ1S+LNA78TTOk6vRCvTJ4VGOE1ssVf3OPapIJmAEp7ImtleSI6IkFGMEFBQTEwM0NBNTM3RUFFRDg3QzI0REQ1MzkwOUI4MEE3OEE5MjNFMzgyM0Q2OERBQ0M5NEI5RkY4MzA1REMifZT7YuH0vZVmPYpiomHuQaUcQh5qw9zUWqGoev4eKJG0Wt0brVjN1HAwBJ2BXnd9Ffs6iKtoSLED3yepHHBkI3MjPjC5mRcLc6Uk/Alusr79mxl+Gar+pVD6IkoO7hkRMcb70f4NQ/DBmkm2Hnq0dL33FfBO3ADIDpxjoPtB0/RctY6P8hfNIoZJMgUa/J5+A0Zg5wkuvDKss6vWx6Knpao8PodprWwWKgUzhui/amx/kCOnu5ef83KHEQivZ2fGEsoo7eVO4odv4++hwdc3r3otehRpw1hvEuPmJvmGaArvEXuYS5JDvR/P/bvpq37Gi0x/yQyjfSjbs3s7+6ouf91tZfO8nTPXjr4xGYvekZo0HydQ209h2HK+Y07RH9u0jMlrNQTgUWjuFw7PGDgzob+ZoYEupEMi4EibKp6zsFXDPJyZN1m5d2hljaO03CS3V/U/FI6qxqk4GT1ma0Mpi+8p4untfuhr3f9CmhbZQXY8NrfnPRJwTXtbAU2sY5O8ws8A0ebwH7Sd2s3PcEYNu2OMhTE1GqEVqkkcHnVfllTyCHKh8T+SrOeinl1z6cwJY8doaIG8X4nb1j9GF2B1Ni7VurD0RZbKlguqUq7LahnKQRpafBUX27Fgx4YHQ+NSjYUvndYOfVA6ylz1JeI/reWrlJou38hkbwuAPh2wBXtlOkXhoSjWGmBZfNeRrdahDLK2Fu2L5EuQ3Y063yRFkqZSCVaQRV6ua2dPpbK6DJmArMCTn0MkbVa/klelOgqZDY+99TfjBXg13X/OMBM=",
            "redirect": {
                "method": "GET",
                "url": "https://test.adyen.com/hpp/redirectIdeal.shtml?brandCode=ideal&currencyCode=EUR&issuerId=1121&merchantAccount=Bastronaut-ecom&merchantIntegration.type=CHECKOUT_GENERIC&merchantIntegration.version=30&merchantReference=12345&merchantReturnData=881562011754598C&merchantSig=wdMajb2Sy72MQ1Mi2Qx8eZAj5Mdn5m9uNRU4BKLu7ok%3D&paymentAmount=10&resURL=https%3A%2F%2Fcheckoutshopper-test.adyen.com%2Fcheckoutshopper%2Fservices%2FPaymentIncomingRedirect%2Fv1%2FlocalPaymentMethod%3FmerchantAccount%3DBastronaut-ecom%26returnURL%3Dhttp%253A%252F%252Fbastronaut.dev%252Fpayment%252F12345&sessionValidity=2019-07-01T21%3A09%3A15Z&skinCode=pub.v2.8015595552162642.bDEZRw6JUC6gf4G1BzEDkdR_GDxkPfO8BKljM-nCzsU"
            }
        }
    }
]


export default PaymentsiDealPresetsTable;
