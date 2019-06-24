import App from './App';
import { Container } from 'flux/utils';
import PaymentMethodsResultsStore from './data/PaymentMethodsResultsStore';
import PaymentMethodsPresetsStore from './data/PaymentMethodsPresetsStore';
import Actions from './data/Actions';

function getStores() {
    return [
        PaymentMethodsResultsStore, PaymentMethodsPresetsStore
    ];
}

function getState() {
    return {

        // TODO
        // create multiple stores and store result here
        paymentMethods: PaymentMethodsResultsStore.getState(),
        paymentMethodsPresets: PaymentMethodsPresetsStore.getState(),
        getPaymentMethods: Actions.getPaymentMethods,
        setGetPaymentMethodsPreset: Actions.setGetPaymentMethodsPreset
    };
}

export default Container.createFunctional(App, getStores, getState);