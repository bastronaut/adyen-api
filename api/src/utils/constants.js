
const constants = {
    routes: {
        root: "/",
        paymentMethods: "/paymentMethods",
        payments: "/payments"
    },
    queryParameters: {
        amount: "a",
        currency: "c",
        countryCode: "cc",
    },
    adyenParameters: {
        apikey: 'X-API-Key',
        contentType: 'Content-Type',
        contentTypeJsonValue: 'application/json'
    },
    adyenEndpoints: {
        paymentMethods: 'https://checkout-test.adyen.com/checkout/V30/paymentMethods',
        payments: 'https://checkout-test.adyen.com/checkout/V30/payments',
        paymentDetails: 'https://checkout-test.adyen.com/v46/payments/details',
        paymentSession: 'https://checkout-test.adyen.com/v46/paymentSession',
        paymentResults: 'https://checkout-test.adyen.com/v46/payments/result'
    },
    paymentMethodTypes: {
        ideal: 'ideal',
        scheme: 'scheme'
    },
    returnUrlReplace: '{id}',
    returnUrl: 'http://bastronaut.dev/payment/' + this.returnUrlReplace
};

module.exports = constants