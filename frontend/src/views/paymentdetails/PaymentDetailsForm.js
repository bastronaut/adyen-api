import React from 'react';
import Input from '../../components/form/Input';
import Button from '../../components/Button';

function PaymentDetailsForm(props) {
    return (
        <form id="paymentDetailsForm" className="payment-details-form">
            <div className="form-group my-4">

                <Input id="pmd-paymentData" label="Payment Data" value={props.paymentData} placeholder="" updateValue={props.updatePaymentData} />

                <Input id="pmd-details" label="Payment Details - willl be json parsed unsafely" value={props.paymentDetails} placeholder="{ field: {field: val}}" updateValue={props.updateDetails} />

            </div>
            {/* <Button type="button" text="submit" customClass="primary mr-2" id="PaymentDetails" onClick={props.handleSubmit} /> */}
            {/* <Button type="button" text="reset" customClass="primary" onClick={() => props.resetPaymentMethods()} /> */}

        </form>
    );
}


export default PaymentDetailsForm;