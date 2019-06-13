
const axios = require('axios');
const apikey = require('../services/apikey-service').getApikey();
const merchantAccount = require('../services/apikey-service').getMerchantAccount();
const constants = require('../../src/utils/constants')

class RequestService {

    constructor() {

    }

    static get(endpoint) {

    }

    static post(endpoint, data) {
        // Add the merchant account to any post data
        data.merchantAccount = merchantAccount;
        // TODO
        // axios.post();
    }
}


module.exports = RequestService;