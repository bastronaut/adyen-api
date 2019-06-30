import ActionTypes from './ActionTypes';
import Dispatcher from './Dispatcher';
import Api from './Api';

const PAYMENTMEHODSENDPOINT = 'paymentMethods';
const PAYMENTS = 'payments';

const Actions = {
    getPaymentMethods(amountValue, currency, countryCode, expectedResponse = "") {

        const paymentMethodsUrl = PAYMENTMEHODSENDPOINT + '?a=' + amountValue + '&c=' + currency + '&cc=' + countryCode;

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
                    error: error
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

    postIdealPayment(amountValue, currency, countryCode, issuer, expectedResponse) {

        const postData = {
            paymentMethod: {
                type: "ideal",
                issuer: issuer
            },
            amount: {
                value: amountValue,
                currency: currency
            },
            country: countryCode
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
                    error: error
                })
            });
    },
    postCCPayment() {

    }

};

export default Actions;