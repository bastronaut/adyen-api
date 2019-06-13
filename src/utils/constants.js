
const constants = {
    routes: {
        root: "/",
        paymentMethods: "/paymentMethods"
    },
    queryParameters: {
        amount: "a",
        currency: "c",
        countryCode: "cc",
    },
    adyenEndpoints: {
        paymentMethods: 'https://checkout-test.adyen.com/checkout/V30/paymentMethods',
        payments: 'https://checkout-test.adyen.com/checkout/V30/payments',
        paymentDetails: 'https://checkout-test.adyen.com/checkout/V30/payments'
    }
};

module.exports = constants