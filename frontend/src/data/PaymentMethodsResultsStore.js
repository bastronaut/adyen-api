import Immutable from 'immutable';
import { ReduceStore } from 'flux/utils';
import ActionTypes from './ActionTypes';
import Dispatcher from './Dispatcher';

class PaymentMethodsResultsStore extends ReduceStore {
    constructor() {
        super(Dispatcher);
    }

    getInitialState() {
        return Immutable.OrderedMap();
    }

    reduce(state, action) {


        switch (action.type) {
            case ActionTypes.GET_PAYMENT_METHODS:
                return action.paymentMethods;
            default:
                return state;
        }
    }
}

export default new PaymentMethodsResultsStore();