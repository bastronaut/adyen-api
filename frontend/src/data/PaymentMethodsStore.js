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
        switch (action.type) {
            case ActionTypes.ADD_TODO:
                // Do nothing for now, we will add logic here soon!
                return state;

            default:
                return state;
        }
    }
}

export default new PaymentMethodsStore();