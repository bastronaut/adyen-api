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
            case ActionTypes.GET_PAYMENT_METHODS_FAILED:
                return {
                    result: JSON.stringify(action.error, null, 2),
                    expectedResult: action.expectedResult
                }
            default:
                return state;
        }
    }
}

export default new PaymentMethodsResultsStore();