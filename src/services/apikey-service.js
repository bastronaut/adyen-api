const argv = require('minimist')(process.argv.slice(2));
const key = argv.k ? argv.k : '';
const merchantAccount = argv.m ? argv.m : '';

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

exports.getApikey = () => {
    return secrets.apikey;
}

exports.getMerchantAccount = () => {
    return secrets.getMerchantAccount;
}

