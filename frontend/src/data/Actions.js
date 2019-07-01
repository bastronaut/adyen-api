import ActionTypes from './ActionTypes';
import Dispatcher from './Dispatcher';
import Api from './Api';

const PAYMENTMEHODSENDPOINT = 'paymentMethods';
const PAYMENTS = 'payments';

/**
 * Contains all API actions. Decided to perform api requests before the dispatch call, and dispatch
 * on success or fail. Could add more complexity but why.
 * 
 * Dirty: 
 * - Abusing the ActionTypes to reset the form inputs and response + expected response views
 * - Should be split up based on API endpoints probably
 * - other stuff
 */
const Actions = {

    /**
     * Performs the /paymentMethods api request to Adyen
     * 
     * @param {*} paymentMethod an instance of PaymentMethod class
     * @param {*} expectedResponse optional expected response to serve as comparison to the actual response
     */
    getPaymentMethods(paymentMethod, expectedResponse = "") {

        const paymentMethodsUrl = PAYMENTMEHODSENDPOINT + '?a=' + paymentMethod.amountValue + '&c=' + paymentMethod.currency + '&cc=' + paymentMethod.countryCode;

        Api.get(paymentMethodsUrl)
            .then(paymentMethods => {
                Dispatcher.dispatch({
                    type: ActionTypes.GET_PAYMENT_METHODS,
                    result: paymentMethods,
                    expectedResult: expectedResponse
                });
            })
            .catch(error => {
                Dispatcher.dispatch({
                    type: ActionTypes.GET_PAYMENT_METHODS_FAILED,
                    error: error.response.data
                })
            })
    },

    resetPaymentMethods() {
        Dispatcher.dispatch({
            type: ActionTypes.GET_PAYMENT_METHODS,
            result: "",
            expectedResult: ""
        })
    },


    /**
     * Performs the /payments api request to Adyen with iDeal information
     * 
     * @param {*} idealPayment instance of an IdealPayment class
     * @param {*} expectedResponse 
     */
    postIdealPayments(idealPayment, expectedResponse) {
        const postData = {
            country: idealPayment.countryCode,
            reference: idealPayment.reference,
            paymentMethod: {
                type: "ideal",
                issuer: idealPayment.issuer
            },
            amount: {
                value: idealPayment.amountValue,
                currency: idealPayment.currency
            }
        };

        Api.post(PAYMENTS, postData)
            .then(payment => {
                Dispatcher.dispatch({
                    type: ActionTypes.POST_PAYMENTS_IDEAL,
                    result: payment,
                    expectedResult: expectedResponse
                });
            })
            .catch(error => {
                Dispatcher.dispatch({
                    type: ActionTypes.POST_PAYMENTS_IDEAL_FAILED,
                    error: error.response.data
                })
            });
    },


    resetPayments() {
        Dispatcher.dispatch({
            type: ActionTypes.POST_PAYMENTS_CC,
            result: "",
            expectedResult: ""
        })
    },

    postUnsecuredCardPayments(unsecuredCardPayment, expectedResponse = "") {
        const postData = {
            country: unsecuredCardPayment.countryCode,
            reference: unsecuredCardPayment.reference,
            paymentMethod: {
                type: "scheme",
                ccPaymentType: "unsecuredFields",
                number: unsecuredCardPayment.number,
                expiryYear: unsecuredCardPayment.expiryYear,
                expiryMonth: unsecuredCardPayment.expiryMonth,
                number: unsecuredCardPayment.number,
                cvc: unsecuredCardPayment.cvc,
                holderName: unsecuredCardPayment.holderName
            },
            amount: {
                value: unsecuredCardPayment.amountValue,
                currency: unsecuredCardPayment.currency
            }
        };

        // optionally trigger 3DS1
        if (unsecuredCardPayment.threeDS1) {
            postData.additionalData = {
                "executeThreeD": "true"
            }
        }

        Api.post(PAYMENTS, postData)
            .then(payment => {
                Dispatcher.dispatch({
                    type: ActionTypes.POST_PAYMENTS_CC,
                    result: payment,
                    expectedResult: expectedResponse
                });
            })
            .catch(error => {
                Dispatcher.dispatch({
                    type: ActionTypes.POST_PAYMENTS_CC_FAILED,
                    error: error.response.data
                })
            });
    },

};

export default Actions;