import React from 'react';
import PaymentsPresetsTable from './PaymentsiDealPresetsTable';
import Title from '../../components/Title';
import Button from '../../components/Button';
import Input from '../../components/form/Input';

function PaymentsIdeal(props) {
    return (
        <div className="row">
            <div className="col">
                <Title text="iDEAL Payments form" type="h3" />

                <form id="paymentsForm">
                    <div className="form-group my-4">

                        <Input id="gpm-amountValue" label="Amount" placeholder="amount" />
                        <Input id="gpm-currency" label="Currency" placeholder="EUR" />
                        <Input id="gpm-countryCode" label="Country Code" placeholder="NL" />

                    </div>
                    <Button type="button" text="submit" customClass="primary" id="paymentsSubmit" />
                </form>

            </div>
            <div className="col-4">
                <Title text="Presets" type="h3" />
                <PaymentsPresetsTable />
            </div>
        </div>
    );
}

export default PaymentsIdeal;


