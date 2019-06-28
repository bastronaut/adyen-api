import { ReduceStore } from 'flux/utils';
import ActionTypes from './ActionTypes';
import Dispatcher from './Dispatcher';

class PaymentMethodsResultsStore extends ReduceStore {
    constructor() {
        super(Dispatcher);
    }

    getInitialState() {
        return {};
    }

    reduce(state, action) {

        switch (action.type) {
            case ActionTypes.GET_PAYMENT_METHODS:
                return {
                    result: action.result,
                    expectedResult: action.expectedResult
                }
            default:
                return state;
        }
    }
}

export default new PaymentMethodsResultsStore();