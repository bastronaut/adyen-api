
import React from 'react';
import GetPaymentsForm from './GetPaymentsForm'
import GetPaymentsResult from './GetPaymentsResult'
import GetPaymentMethodsPresetsTable from './GetPaymentsPresetsTable'
import Title from '../../components/Title';

function GetPayments(props) {
    return (
        <div>

            <Title text="Payment Methods" type="h3" />
            <div class="row">
                <div class="col">
                    <Title text="Get payment methods" type="h3" />
                    <GetPaymentsForm />
                </div>
                <div class="col-4">
                    <Title text="Presets" type="h3" />
                    <GetPaymentMethodsPresetsTable />
                </div>
            </div>

            <GetPaymentsResult />
        </div>
    );
}

export default GetPayments;


