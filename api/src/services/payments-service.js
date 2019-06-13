const HTTPRequestService = require('../services/request-service');
const constants = require('../../src/utils/constants')
const requestService = new HTTPRequestService();


// Docs: https://docs.adyen.com/api-explorer/#/PaymentSetupAndVerificationService/v46/payments
// todo
// implement some stuff, figure out if we need seperate methods for payment types
// or whether we can do it with one
class PaymentsService {

    constructor() { }


    makePayment(paymentData, callback) {

        const returnUrl = constants.returnUrl;

        const paymentMethod = req.body.paymentMethod.type;
        const amount = req.body.amount.value;
        const countryCode = req.body.countryCode;
        const currency = req.body.amount.currency;

        switch (paymentMethod) {
            case constants.paymentMethodTypes.ideal:

                const issuer = req.body.paymentMethod.issuer;

                paymentsService.makePayment()
                break;

            case constants.paymentMethodTypes.scheme:
                res.status(400).json({ "todo": "todo" })
                break;

            default:
                res.status(400).json({ "error": "todo" })

        }
    }

    makeIdealPayment() {

    }

}


module.exports = PaymentsService;