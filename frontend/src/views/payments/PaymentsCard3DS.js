import React from 'react';
import CardPaymentsPresetsTable from './PaymentsCardPresetsTable';
import Title from '../../components/Title';
import Button from '../../components/Button';
import Input from '../../components/form/Input';


function PaymentsCard3DS(props) {
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

                        <Input id="pm-countryCode" label={props.countryCode} placeholder="NL" updateValue={props.updateCountryCode} />

                        <div className="row">
                            <div className="col" >
                                <Input id="pm-paymentMethodType" label="Payment Method Type" value="scheme" disabled="true" />
                            </div>
                            <div className="col" >
                                <Input id="pm-paymentMethodType" label="Custom Card Payment Type" value="unsecuredFields" disabled="true" />
                            </div>
                        </div>


                        <Input id="pm-cc-nr" label="Number" value={props.number} placeholder="4111 1111 4555 1142" updateValue={props.updateNumber} />
                        <Input id="pm-reference" label="Card holder" value={props.holderName} placeholder="John Smith" updateValue={props.updateHolderName} />

                        <div className="row">
                            <div className="col" >
                                <Input id="pm-cc-exp-m" value={props.expiryMonth} label="Expiration Month" placeholder="10" updateValue={props.updateExpiryMonth} />
                            </div>

                            <div className="col" >
                                <Input id="pm-cc-exp-y" value={props.expiryYear} label="Expiration Year" placeholder="2020" updateValue={props.updateExpiryYear} />
                            </div>

                            <div className="col" >
                                <Input id="pm-cc-cvc" value={props.cvc} label="CVC" placeholder="737" updateValue={props.updateCVC} />
                            </div>
                        </div>

                        <Input id="pm-reference" value={props.reference} label="Payment reference" placeholder="1" updateValue={props.updatePaymentReference} />

                    </div>
                    <Button type="button" text="submit" customClass="primary mr-2" id="cardPaymentSubmit" onClick={props.handleSubmit} />
                    <Button type="button" text="reset" customClass="primary" id="cardPaymentReset" onClick={() => props.resetPayments()} />
                </form>


            </div>
            <div className="col-4">

            </div>
        </div >

    );
}

export default PaymentsCard3DS;