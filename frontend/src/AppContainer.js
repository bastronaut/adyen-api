import App from './App';
import { Container } from 'flux/utils';
import PaymentMethodsStore from './data/PaymentMethodsStore';

function getStores() {
    return [
        PaymentMethodsStore,
    ];
}

function getState() {
    return {
        todos: PaymentMethodsStore.getState(),
    };
}

export default Container.createFunctional(App, getStores, getState);