const axios = require('axios');
const apikey = require('../services/apikey-service').getApikey();

class PaymentMethodsService {

    constructor() {

    }

    getPaymentMethods(amount, currency = "EUR", countryCode = "NL") {
        console.log("wot");
        console.log(amount, currency, countryCode);
        return "1";
    }
}


module.exports = PaymentMethodsService;