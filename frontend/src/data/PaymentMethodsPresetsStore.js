import Immutable from 'immutable';
import { ReduceStore } from 'flux/utils';
import ActionTypes from './ActionTypes';
import Dispatcher from './Dispatcher';

class PaymentMethodsPresetsStore extends ReduceStore {
    constructor() {
        super(Dispatcher);
    }

    getInitialState() {
        return Immutable.OrderedMap();
    }

    reduce(state, action) {
        switch (action.type) {
            case ActionTypes.GET_PAYMENT_METHODS_SET_PRESET:
                return action.getPaymentMethodsValues;
            default:
                return state;
        }
    }
}

export default new PaymentMethodsPresetsStore();