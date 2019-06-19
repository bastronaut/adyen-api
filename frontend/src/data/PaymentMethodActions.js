import ActionTypes from './ActionTypes';
import Dispatcher from './Dispatcher';

const Actions = {
    addTodo(text) {
        Dispatcher.dispatch({
            type: ActionTypes.ADD_TODO,
            text,
        });
    },
};

export default Actions;