import App from './App';
import { Container } from 'flux/utils';
import PaymentMethodsResultsStore from './data/PaymentMethodsResultsStore';
import Actions from './data/Actions';

function getStores() {
    return [
        PaymentMethodsResultsStore
    ];
}

function getState() {
    return {
        paymentMethods: PaymentMethodsResultsStore.getState(),
        getPaymentMethods: Actions.getPaymentMethods,
        resetPaymentMethods: Actions.resetPaymentMethods
    };
}

export default Container.createFunctional(App, getStores, getState);