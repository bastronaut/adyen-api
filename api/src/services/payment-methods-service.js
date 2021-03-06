const HTTPRequestService = require('../services/request-service');
const constants = require('../../src/utils/constants')
const requestService = new HTTPRequestService();

class PaymentMethodsService {

    // Could potentially add constructor param for adyen endpoints so we can easily inject mocks
    constructor() { }

    /**
     * https://docs.adyen.com/api-explorer/#/PaymentSetupAndVerificationService/paymentMethods
     * 
     */
    getPaymentMethods(amountValue, currency, countryCode, callback) {
        const postData = {
            'countryCode': countryCode,
            'amount': {
                value: amountValue,
                currency: currency
            }
        }

        requestService.post(constants.adyenEndpoints.paymentMethods, postData)
            .then(response => {
                callback(response.data);
            })
            .catch(error => {
                console.log(error);
                callback(error, { 'failure': error.response.data });
            })
    }

    // TODO rename and implement
    // https://docs.adyen.com/api-explorer/#/PaymentSetupAndVerificationService/v46/paymentMethods
    // see dropdown, can use shopper reference to get the stored payment methods for customer
    getPaymentMethodsPreviouslyStoredOneClick() {

        /**
         * {
                "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
                "countryCode": "NL",
                "amount": {
                    "currency": "EUR",
                    "value": 1000
                },
                "shopperReference": "yourShopperId_IOfW3k9G2PvXFu2j"
                }
         */

    }
}


module.exports = PaymentMethodsService;