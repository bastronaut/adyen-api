const HTTPRequestService = require('../services/request-service');
const constants = require('../../src/utils/constants')
const requestService = new HTTPRequestService();


class PaymentDetailsService {

    constructor() { }

    // Assumes paymentData is somewhat complete and does no full validation for simplification
    makePayment(callback) {


    }



}





module.exports = PaymentDetailsService;