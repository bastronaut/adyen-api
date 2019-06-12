const argv = require('minimist')(process.argv.slice(2));
const key = argv.k ? argv.k : '';

if (key == '') {
    console.log('No api key given in startup, adyen calls will fail');
}

const secrets = {
    apikey: key
};

exports.getApikey = () => {
    return secrets.apikey;
}


