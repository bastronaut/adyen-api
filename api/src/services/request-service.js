
const axios = require('axios');
const apikeyService = require('../services/apikey-service');
const constants = require('../../src/utils/constants');

class HTTPRequestService {

    constructor() {
        this.apikey = apikeyService.getApikey();
        this.merchantAccount = apikeyService.getMerchantAccount();
        axios.defaults.headers.post[constants.adyenParameters.apikey] = this.apikey;
        axios.defaults.headers.post[constants.adyenParameters.contentType] = constants.adyenParameters.contentTypeJsonValue;
    }

    get(endpoint) {
        return axios.get(constants.routes.apiEndpoint, endpoint);
    }

    post(endpoint, data) {
        // Add the merchant account to any post data
        data.merchantAccount = this.merchantAccount;

        console.log(`posting to ${endpoint} with data:`);
        console.log(data);
        return axios.post(endpoint, data);
    }
}


module.exports = HTTPRequestService;