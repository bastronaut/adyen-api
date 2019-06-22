
import React from 'react';
import Input from '../../components/form/Input';
import Button from '../../components/Button';

function PaymentsForm(props) {
    return (
        <form id="paymentsForm">
            <div className="form-group my-4">

                <Input id="gpm-amountValue" label="Amount" placeholder="amount" />
                <Input id="gpm-currency" label="Currency" placeholder="EUR" />
                <Input id="gpm-countryCode" label="Country Code" placeholder="NL" />

            </div>
            <Button type="button" text="submit" customClass="primary" id="paymentsSubmit" />
        </form>
    );
}

export default PaymentsForm;


