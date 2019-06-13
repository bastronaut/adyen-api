const axios = require('axios');
const requestService = require('../services/request-service');
const constants = require('../../src/utils/constants')

class PaymentMethodsService {

    paymentMethodsEndpoint = constants.adyenEndpoints.paymentMethods;

    // Could potentially add constructor param for adyen endpoints so we can easily inject mocks
    constructor() { }

    /**
     * https://docs.adyen.com/api-explorer/#/PaymentSetupAndVerificationService/paymentMethods
     * 
     * Additional available params in api:
     * allowedPaymentMethods = [], 
     * blockedPaymentMethods = [], 
     * channel = iOS, Android, Web
     * shopperLocale = country + language code combination
     * shopperReference = The shopper's reference to uniquely identify this shopper
     * 
     * @param {*} amount 
     * @param {*} currency 
     * @param {*} countryCode 
     */
    getPaymentMethods(amount, currency = "EUR", countryCode = "NL") {

        const postData = {
            countryCode = countryCode,
            "amount": {
                "currency": currency,
                "value": amount
            }
        }
        return requestService.post( , postData);
    }
}


module.exports = PaymentMethodsService;