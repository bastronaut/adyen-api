const HTTPRequestService = require('../services/request-service');
const constants = require('../../src/utils/constants')
const requestService = new HTTPRequestService();


/**
 * Adyens API supports many different types of payments, such as 3D secure (1 and 2), using secured fields,
 * using a tokenizer service to store the details. This is just for cards, theres also many different other types.
 */
class PaymentsService {

    constructor() { }

    // Assumes paymentData is somewhat complete and does no full validation for simplification
    makePayment(paymentData, callback) {

        const paymentMethod = paymentData.paymentMethod.type;

        switch (paymentMethod) {
            case constants.paymentMethodTypes.ideal:
                this._makeIdealPayment(paymentData)
                    .then(response => {
                        callback(response.data);
                    }).catch(error => {
                        callback(error, { 'failure': error });
                    });

                break;

            case constants.paymentMethodTypes.scheme:

                this._makeCreditCardPayment(paymentData)
                    .then(response => {
                        callback(response);
                    }).catch(error => {
                        callback(error, { 'failure': error });
                    });

                break;

            default:
                res.status(400).json({ 'error': 'todo' })

        }
    }

    _makeIdealPayment(paymentData) {

        const returnUrl = constants.returnUrl.replace(constants.returnUrlReplace, paymentData.reference);

        const postData = {
            amount: makeAmountObject(paymentData.amount.currency, paymentData.amount.value),
            reference: paymentData.reference,
            paymentMethod: {
                type: 'ideal',
                issuer: paymentData.paymentMethod.issuer
            },
            returnUrl: returnUrl,
        };
        return requestService.post(constants.adyenEndpoints.payments, postData);
    }



    // check for Secured fields 
    // check for 3D secure 1
    // check for tokenizing card details (paymentMethod.storeDetails = true)
    // check for card payment with token and cvv and secured fields

    /**
     * For card payments (type 'scheme') we've added a seperate field in the request to easily distinguish the type
     * of payment we want to do. From a merchant perspective I imagine they would not support all these different types
     * (or do they), but this makes the logic simpler from our perspective. This field is the 'ccPaymentType', found in
     * the request body as child of the 'paymentMethod' 
     *     
     * @param {*} paymentData 
     */
    _makeCreditCardPayment(paymentData) {

        const returnUrl = constants.returnUrl.replace(constants.returnUrlReplace, paymentData.reference);


        const postData = {
            amount: makeAmountObject(paymentData.amount.currency, paymentData.amount.value),
            reference: paymentData.reference,
            returnUrl: returnUrl,
            paymentMethod: {
                type: 'scheme'
            }
        };

        // postData requires enrichment with specific payment transaction data (ccPaymentType)
        switch (paymentData.paymentMethod.ccPaymentType) {

            case constants.customCcPaymentTypes.unsecuredFields:

                postData.paymentMethod.number = paymentData.paymentMethod.number;
                postData.paymentMethod.expiryMonth = paymentData.paymentMethod.expiryMonth;
                postData.paymentMethod.expiryYear = paymentData.paymentMethod.expiryYear;
                postData.paymentMethod.cvc = paymentData.paymentMethod.cvc;
                postData.paymentMethod.holderName = paymentData.paymentMethod.holderName;

                break;

            case constants.customCcPaymentTypes.securedFields:

                postData.paymentMethod.encryptedCardNumber = paymentData.paymentMethod.number;
                postData.paymentMethod.encryptedExpiryMonth = paymentData.paymentMethod.expiryMonth;
                postData.paymentMethod.encryptedExpiryYear = paymentData.paymentMethod.expiryYear;
                postData.paymentMethod.encryptedSecurityCode = paymentData.paymentMethod.cvc;
                postData.paymentMethod.holderName = paymentData.paymentMethod.holderName;

                break;

            case constants.customCcPaymentTypes.threeDSecure1:

                postData.paymentMethod.number = paymentData.paymentMethod.number;
                postData.paymentMethod.expiryMonth = paymentData.paymentMethod.expiryMonth;
                postData.paymentMethod.expiryYear = paymentData.paymentMethod.expiryYear;
                postData.paymentMethod.cvc = paymentData.paymentMethod.cvc;
                postData.paymentMethod.holderName = paymentData.paymentMethod.holderName;

                postData.additionalData = {
                    executeThreeD: "true"
                };

                break;

            default:
                throw "No matching ccPaymentType field found"

        }

        return requestService.post(constants.adyenEndpoints.payments, postData);
    }

}

const makeAmountObject = (currency, value) => {
    return {
        'currency': currency,
        'value': value
    };
}



module.exports = PaymentsService;