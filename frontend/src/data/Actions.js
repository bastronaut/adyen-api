import ActionTypes from './ActionTypes';
import Dispatcher from './Dispatcher';
import Api from './Api';

const PAYMENTMEHODSENDPOINT = 'paymentMethods';
const Actions = {
    getPaymentMethods(amountValue, currency, countryCode, expectedResponse = "") {

        const url = PAYMENTMEHODSENDPOINT + '?a=' + amountValue + '&c=' + currency + '&cc=' + countryCode;

        Api.get(url)
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
    }
};

export default Actions;