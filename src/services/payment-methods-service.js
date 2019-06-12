const axios = require('axios');
const apikey = require('../services/apikey-service').getApikey();

class PaymentMethodsService {

    constructor() {

    }

    getPaymentMethods(amount, currency = "EUR", countryCode = "NL") {
        console.log("wot im being called");
        return "1";
    }
}


module.exports = PaymentMethodsService;