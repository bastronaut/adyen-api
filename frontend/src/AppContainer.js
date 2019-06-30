import App from './App';
import { Container } from 'flux/utils';
import PaymentMethodsResultsStore from './data/PaymentMethodsResultsStore';
import PaymentsResultsStore from './data/PaymentsResultsStore';
import Actions from './data/Actions';

function getStores() {
    return [
        PaymentMethodsResultsStore, PaymentsResultsStore
    ];
}

function getState() {
    return {
        paymentMethods: PaymentMethodsResultsStore.getState(),
        payments: PaymentsResultsStore.getState(),
        getPaymentMethods: Actions.getPaymentMethods,
        resetPaymentMethods: Actions.resetPaymentMethods,
        postIdealPayments: Actions.postIdealPayments,
        resetIdealPayments: Actions.resetIdealPayments,
        postUnsecuredCardPayments: Actions.postUnsecuredCardPayments,
        resetUnsecuredCardPayments: Actions.resetUnsecuredCardPayments
    };
}

export default Container.createFunctional(App, getStores, getState);