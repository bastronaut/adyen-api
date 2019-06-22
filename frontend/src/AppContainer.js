import App from './App';
import { Container } from 'flux/utils';
import Store from './data/Store';
import Actions from './data/Actions';

function getStores() {
    return [
        Store,
    ];
}

function getState() {
    return {
        paymentMethods: Store.getState(),
        getPaymentMethods: Actions.getPaymentMethods
    };
}

export default Container.createFunctional(App, getStores, getState);