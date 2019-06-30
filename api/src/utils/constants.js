
const constants = {
    port: 3001,
    routes: {
        root: "/",
        paymentMethods: "/paymentMethods",
        payments: "/payments",
        paymentDetails: "/paymentDetails",
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
        scheme: 'scheme',
        applePay: 'applepay',
        paywithgoogle: 'paywithgoogle',
    },
    customCcPaymentTypes: {
        unsecuredFields: 'unsecuredFields',
        securedFields: 'securedFields',
        threeDSecure1: 'threeDSecure1',
        threeDSecure1SecuredFields: 'threeDSecure1SecuredFields',
        threeDSecure2: 'threeDSecure2',
        threeDSecure2: 'threeDSecure2',
        unsecuredFieldsTokenize: 'unsecuredFieldsTokenize',
        securedFieldsTokenize: 'securedFieldsTokenize',
        tokenCCV: 'tokenCCV',
        tokenCCVSecured: 'tokenCCV',
        tokenCCV: 'tokenCCV',
    },
    returnUrlReplace: '{id}',
    returnUrl: 'http://bastronaut.dev/payment/{id}',
    errorStatus: {
        badRequest: "Bad request",
    },
    errorMessages: {
        paymentMethodMissing: "The payment method 'type' field is missing or invalid",
        paymentAmountMissing: "The payment amount field is missing, requires an amount and currency",
        genericError: "Making payment failed"
    },
};

module.exports = constants