import ActionTypes from './ActionTypes';
import Dispatcher from './Dispatcher';
import Api from './Api';

const PAYMENTMEHODSENDPOINT = 'paymentMethods';
const Actions = {
    getPaymentMethods(amountValue, currency, countryCode) {

        console.log(" get payments  ASDASD called ");

        const url = PAYMENTMEHODSENDPOINT + '?a=' + amountValue + '&c=' + currency + '&cc=' + countryCode;

        Api.get(url)
            .then(paymentMethods => {
                Dispatcher.dispatch({
                    type: ActionTypes.GET_PAYMENT_METHODS,
                    getPaymentMethodsValues: {
                        amountValue: amountValue,
                        currency: currency,
                        countryCode: countryCode,
                    },
                    paymentMethods: paymentMethods
                });
            })
            .catch(error => {
                Dispatcher.dispatch({
                    type: ActionTypes.GET_PAYMENT_METHODS_FAILED,
                    getPaymentMethodsValues: {
                        amountValue: amountValue,
                        currency: currency,
                        countryCode: countryCode,
                    },
                })
            })

    },

    setGetPaymentMethodsPreset(preset) {
        Dispatcher.dispatch({
            type: ActionTypes.GET_PAYMENT_METHODS_SET_PRESET,
            getPaymentMethodsValues: {
                amountValue: preset.amountValue,
                currency: preset.currency,
                countryCode: preset.countryCode,
            },
        });
    }
};

export default Actions;