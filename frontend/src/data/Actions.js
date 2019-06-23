import ActionTypes from './ActionTypes';
import Dispatcher from './Dispatcher';
import Api from './Api';

const PAYMENTMEHODSENDPOINT = 'paymentMethods';
const Actions = {
    getPaymentMethods(amountValue, currency, countryCode) {


        const url = PAYMENTMEHODSENDPOINT + '?a=' + amountValue + '&c=' + currency + '&cc=' + countryCode;

        Api.get(url)
            .then(paymentMethods => {
                Dispatcher.dispatch({
                    type: ActionTypes.GET_PAYMENT_METHODS,
                    amountValue: amountValue,
                    currency: currency,
                    countryCode: countryCode,
                    paymentMethods: paymentMethods
                });
            })
            .catch(error => {
                Dispatcher.dispatch({
                    type: ActionTypes.GET_PAYMENT_METHODS_FAILED,
                    amountValue: amountValue,
                    currency: currency,
                    countryCode: countryCode,
                })
            })

    },
    setGetPaymentMethodsPreset(amountValue, currency, countryCode) {
        Dispatcher.dispatch({
            type: ActionTypes.GET_PAYMENT_METHODS_SET_PRESET,
            amountValue,
            currency,
            countryCode
        })
    }
};

export default Actions;