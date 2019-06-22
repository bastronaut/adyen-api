
import React from 'react';
import GetPaymentsForm from './GetPaymentsForm'
import GetPaymentsResult from './GetPaymentsResult'
import GetPaymentMethodsPresetsTable from './GetPaymentsPresetsTable'
import Title from '../../components/Title';

function GetPayments(props) {
    return (
        <div>

            <Title text="Payment Methods" type="h3" />
            <div className="row">
                <div className="col">
                    <Title text="Get payment methods" type="h3" />
                    <GetPaymentsForm {...props} />
                </div>
                <div className="col-4">
                    <Title text="Presets" type="h3" />
                    <GetPaymentMethodsPresetsTable {...props} />
                </div>
            </div>

            <GetPaymentsResult />
        </div>
    );
}

export default GetPayments;


