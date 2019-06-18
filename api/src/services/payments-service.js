const HTTPRequestService = require('../services/request-service');
const constants = require('../../src/utils/constants')
const requestService = new HTTPRequestService();


// Docs: https://docs.adyen.com/api-explorer/#/PaymentSetupAndVerificationService/v46/payments
// todo
// implement some stuff, figure out if we need seperate methods for payment types
// or whether we can do it with one
class PaymentsService {

    constructor() { }

    // Assumes paymentData is somewhat complete and does no full validation for simplification
    makePayment(paymentData, callback) {

        const paymentMethod = paymentData.paymentMethod.type;

        switch (paymentMethod) {
            case constants.paymentMethodTypes.ideal:
                this._makeIdealPayment(paymentData)
                    .then(response => {
                        callback(response);
                    }).catch(error => {
                        throw error;
                    })
                break;

            case constants.paymentMethodTypes.scheme:
                res.status(400).json({ 'todo': 'todo' })
                break;

            default:
                res.status(400).json({ 'error': 'todo' })

        }
    }

    _makeIdealPayment(paymentData) {

        const returnUrl = constants.returnUrl.replace(constants.returnUrlReplace, paymentData.reference);
        const amount = makeAmountObject(paymentData.amount.currency, paymentData.amount.value);

        const postData = {
            amount: amount,
            reference: paymentData.reference,
            paymentMethod: {
                type: 'ideal',
                issuer: paymentData.paymentMethod.issuer
            },
            returnUrl: returnUrl
        };
        return requestService.post(constants.adyenEndpoints.payments, postData);
    }

    _makeCreditCardPayment(paymentData) {

        const returnUrl = constants.returnUrl.replace(constants.returnUrlReplace, paymentData.reference);
        const amount = makeAmountObject(paymentData.amount.currency, paymentData.amount.value);
        const postData = {
            amount: amount,
            reference: paymentData.reference,
            paymentMethod: {
                type: 'scheme'
                //  todo
            },
            returnUrl: returnUrl
        }
    }


}

const makeAmountObject = (currency, value) => {
    return {
        'currency': currency,
        'value': value
    };
}



module.exports = PaymentsService;