import React from 'react';
import Input from '../../components/form/Input';
import Button from '../../components/Button';

function GetPaymentMethodsForm(props) {
    return (
        <form id="getPaymentMethodsForm">
            <div className="form-group my-4">
                <Input id="gpm-amountValue" label="Amount" value={props.amountValue} placeholder="amount" updateValue={props.updateAmount} />
                <Input id="gpm-currency" label="Currency" value={props.currency} placeholder="EUR" updateValue={props.updateCurrency} />
                <Input id="gpm-countryCode" label="Country Code" value={props.countryCode} placeholder="NL" updateValue={props.updateCountryCode} />
            </div>
            <Button type="button" text="submit" customClass="primary mr-4" id="getPaymentMethodsSubmit" onClick={props.handleSubmit} />
            <Button type="button" text="reset" customClass="primary" id="getPaymentMethodsSubmit" onClick={() => props.resetPaymentMethods()} />

        </form>
    );
}


export default GetPaymentMethodsForm;