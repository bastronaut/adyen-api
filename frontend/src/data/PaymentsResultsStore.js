import { ReduceStore } from 'flux/utils';
import ActionTypes from './ActionTypes';
import Dispatcher from './Dispatcher';

class PaymentsResultsStore extends ReduceStore {
    constructor() {
        super(Dispatcher);
    }

    getInitialState() {
        return {};
    }

    reduce(state, action) {

        switch (action.type) {
            case ActionTypes.POST_PAYMENTS_IDEAL:
                return {
                    result: action.result,
                    expectedResult: action.expectedResult
                }
            default:
                return state;
        }
    }
}

export default new PaymentsResultsStore();