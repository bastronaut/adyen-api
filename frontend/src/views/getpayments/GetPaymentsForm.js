
import React from 'react';
import Input from '../../components/form/Input';
import Button from '../../components/Button';
import axios from 'axios'
import Actions from '../../data/Actions';

class GetPaymentsForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            amountValue: 0,
            currency: "EUR",
            countryCode: "NL"
        }
    }

    render() {
        return (
            <form id="getPaymentMethodsForm">
                <div className="form-group my-4">

                    <Input id="gpm-amountValue" label="Amount" placeholder="amount" updateValue={event => this.updateAmountValue(event)} />
                    <Input id="gpm-currency" label="Currency" placeholder="EUR" updateValue={event => this.updateCurrency(event)} />
                    <Input id="gpm-countryCode" label="Country Code" placeholder="NL" updateValue={event => this.updateCountryCode(event)} />

                </div>
                <Button type="button" text="submit" customClass="primary" id="getPaymentMethodsSubmit" onClick={() => this.handleSubmit()} />

            </form>
        );
    }

    updateAmountValue(event) {
        this.setState({
            amountValue: event.target.value
        });
    }

    updateCurrency(event) {
        this.setState({
            currency: event.target.value
        });
    }

    updateCountryCode(event) {
        this.setState({
            countryCode: event.target.value
        });
    }

    handleSubmit() {
        this.props.getPaymentMethods(this.state.amountValue, this.state.currency, this.state.countryCode);
    }
}

export default GetPaymentsForm;


