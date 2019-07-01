import React from 'react';
import PaymentsPresetsTable from './PaymentsiDealPresetsTable';
import Title from '../../components/Title';
import Button from '../../components/Button';
import Input from '../../components/form/Input';

function PaymentsIdeal(props) {
    return (
        <div className="row">
            <div className="col">

                <form id="paymentsForm">
                    <div className="form-group my-4">

                        <div className="row">
                            <div className="col" >
                                <Input id="pm-amountValue" value={props.amountValue} label="Amount" placeholder="amount" updateValue={props.updateAmount} />
                            </div>
                            <div className="col">
                                <Input id="pm-currency" value={props.currency} label="Currency" placeholder="EUR" updateValue={props.updateCurrency} />
                            </div>
                        </div>

                        <Input id="pm-countryCode" label="Country Code" value={props.countryCode} placeholder="NL" updateValue={props.updateCountryCode} />

                        <Input id="pm-paymentMethodType" label="Payment Method Type" value="ideal" disabled="true" />

                        <Input id="pm-issuer" label="Issuer ID" value={props.issuer} placeholder="Issuer ID" updateValue={props.updateIssuer} />

                        <Input id="pm-reference" label="Payment reference" value={props.reference} placeholder="1" updateValue={props.updatePaymentReference} />

                    </div>
                    <Button type="button" text="submit" customClass="primary mr-2" id="paymentsSubmit" onClick={props.handleSubmit} />
                    <Button type="button" text="reset" customClass="primary" onClick={() => props.resetPayments()} />
                </form>

            </div>
            <div className="col-4">
                <Title text="Presets" type="h3" />
                <PaymentsPresetsTable {...props} />
            </div>
        </div>
    );
}

export default PaymentsIdeal;


