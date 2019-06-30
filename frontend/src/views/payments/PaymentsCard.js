import React from 'react';
import PaymentsPresetsTable from './PaymentsiDealPresetsTable';
import Title from '../../components/Title';
import Button from '../../components/Button';
import Input from '../../components/form/Input';


function PaymentsCard(props) {
    return (
        <div className="row">
            <div className="col">
                <Title text="Card Payments" type="h3" />

                <form id="paymentsForm">
                    <div className="form-group my-4">

                        <div className="row">
                            <div className="col" >
                                <Input id="pm-amountValue" label="Amount" placeholder="amount" />
                            </div>
                            <div className="col">
                                <Input id="pm-currency" label="Currency" placeholder="EUR" />
                            </div>
                        </div>

                        <Input id="pm-countryCode" label="Country Code" placeholder="NL" />

                        <Input id="pm-paymentMethodType" label="Payment Method Type" value="scheme" disabled="true" />

                        <Input id="pm-cc-nr" label="Number" placeholder="4111111111111111" />

                        <div className="row">
                            <div className="col" >
                                <Input id="pm-cc-exp-m" label="Expiration Month" placeholder="2020" />
                            </div>

                            <div className="col" >
                                <Input id="pm-cc-exp-y" label="Expiration Year" placeholder="John Smith" />
                            </div>

                            <div className="col" >
                                <Input id="pm-cc-cvc" label="CVC" placeholder="737" />
                            </div>
                        </div>

                        <Input id="pm-reference" label="Payment reference" value="123" />

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

export default PaymentsCard;