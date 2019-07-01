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
            case ActionTypes.POST_PAYMENTS_IDEAL_FAILED:
                return {
                    result: action.error,
                    expectedResult: action.expectedResult
                }
            case ActionTypes.POST_PAYMENTS_CC:
                return {
                    result: action.result,
                    expectedResult: action.expectedResult
                }
            case ActionTypes.POST_PAYMENTS_CC_FAILED:
                return {
                    result: action.error,
                    expectedResult: action.expectedResult
                }
            default:
                return state;
        }
    }
}

export default new PaymentsResultsStore();