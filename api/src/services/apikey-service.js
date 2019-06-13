/**
 * Service to provide account relevant info. For development purposes, you can add a .env file 
 * and add the environment variables to load. Will require the following environment variables:
 * - ADYENAPIKEY
 * - ADYENMERCHANTACCOUNT
 */

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const key = process.env.ADYENAPIKEY || '';
const merchantAccount = process.env.ADYENMERCHANTACCOUNT || '';

if (key == '') {
    console.log('No api key given on startup, adyen calls will fail');
}

if (merchantAccount == '') {
    console.log('No Merchant Account given on startup, adyen calls will fail');
}

const secrets = {
    apikey: key,
    merchantAccount: merchantAccount
}

console.log("Starting system with: ");
console.log(secrets);

exports.getApikey = () => {
    return secrets.apikey;
}

exports.getMerchantAccount = () => {
    return secrets.merchantAccount;
}

