import Immutable from 'immutable';
import { ReduceStore } from 'flux/utils';
import ActionTypes from './ActionTypes';
import Dispatcher from './Dispatcher';

class PaymentMethodsStore extends ReduceStore {
    constructor() {
        super(Dispatcher);
    }

    getInitialState() {
        return Immutable.OrderedMap();
    }

    reduce(state, action) {
        console.log("the state is:");
        console.log(state);
        switch (action.type) {
            case ActionTypes.GET_PAYMENT_METHODS:
                // Do nothing for now, we will add logic here soon!
                // TODO probably need to clear or something? seems to keep adding payment methods
                return action.paymentMethods;

            case ActionTypes.GET_PAYMENT_METHODS_SET_PRESET:
                // TODO
                return state;
            default:
                return state;
        }
    }
}

export default new PaymentMethodsStore();