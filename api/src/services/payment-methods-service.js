const axios = require('axios');
const HTTPRequestService = require('../services/request-service');
const constants = require('../../src/utils/constants')
const requestService = new HTTPRequestService();

class PaymentMethodsService {

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
    getPaymentMethods(amount, currency = 'EUR', countryCode = 'NL', callback) {
        const postData = {
            'countryCode': countryCode,
            'amount': {
                'currency': currency,
                'value': amount
            }
        }

        requestService.post(constants.adyenEndpoints.paymentMethods, postData)
            .then((response) => {
                callback(response.data);
            })
            .catch((error) => {
                console.log(error);
                callback(error, { 'failure': 'todo' });
            })
    }
}


module.exports = PaymentMethodsService;