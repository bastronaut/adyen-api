
import React from 'react';
import GetPaymentMethodsForm from './PaymentMethodsForm'
import GetPaymentsResult from './PaymentMethodsResults'
import GetPaymentMethodsPresetsTable from './PaymentMethodsPresetsTable'
import Title from '../../components/Title';

function GetPaymentMethods(props) {
    return (
        <div>

            <Title text="Payment Methods" type="h3" />
            <div className="row">
                <div className="col">
                    <Title text="Get payment methods" type="h3" />
                    <GetPaymentMethodsForm {...props} />
                </div>
                <div className="col-4">
                    <Title text="Presets" type="h3" />
                    <GetPaymentMethodsPresetsTable {...props} />
                </div>
            </div>

            <GetPaymentsResult {...props} />
        </div>
    );
}

export default GetPaymentMethods;


