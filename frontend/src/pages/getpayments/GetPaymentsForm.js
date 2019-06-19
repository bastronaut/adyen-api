
import React from 'react';
import Input from '../../components/form/Input';
import Button from '../../components/Button';
import axios from 'axios'

class GetPaymentsForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            amountValue: 0,
            currency: "",
            countryCode: ""
        }
    }

    handleSubmit() {
        axios.get('https://localhost:300/getPayments?a=50&c=EUR&cc=NL')
            .then(response => console.log(response));
    }

    render() {
        return (
            <form id="getPaymentMethodsForm">
                <div className="form-group my-4">

                    <Input id="gpm-amountValue" label="Amount" placeholder="amount" />
                    <Input id="gpm-currency" label="Currency" placeholder="EUR" />
                    <Input id="gpm-countryCode" label="Country Code" placeholder="NL" />

                </div>
                <Button type="button" text="submit" customClass="primary" id="getPaymentMethodsSubmit" onClick={this.handleSubmit} />
            </form>
        );
    }
}

export default GetPaymentsForm;


