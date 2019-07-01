
import React from 'react';
import GetPaymentMethodsForm from './PaymentMethodsForm'
import GetPaymentsResult from './PaymentMethodsResults'
import GetPaymentMethodsPresetsTable from './PaymentMethodsPresetsTable'
import Title from '../../components/Title';
import { PaymentMethod } from '../dto/PaymentMethod';

class GetPaymentMethods extends React.Component {

    constructor(props) {
        super(props);

        // Defaults
        this.state = {
            amountValue: "0",
            currency: "EUR",
            countryCode: "NL",
        }
    }

    render() {
        return (
            <div className="mb-10">
                <Title text="Payment Methods" type="h1" customClass="text-center" />
                <div className="row">
                    <div className="col">
                        <GetPaymentMethodsForm {...this.props}
                            updateAmount={event => this.updateAmountValue(event)}
                            updateCurrency={event => this.updateCurrency(event)}
                            updateCountryCode={event => this.updateCountryCode(event)}
                            handleSubmit={() => this.handleSubmit()}
                            amountValue={this.state.amountValue}
                            currency={this.state.currency}
                            countryCode={this.state.countryCode}
                        />
                    </div>
                    <div className="col-4">
                        <Title text="Presets" type="h3" />
                        <GetPaymentMethodsPresetsTable {...this.props}
                            clickPresetTable={this.clickPresetTable.bind(this)} />
                    </div>
                </div>

                <GetPaymentsResult {...this.props} />
            </div>
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

    clickPresetTable(preset) {
        this.setState({
            countryCode: preset.countryCode,
            currency: preset.currency,
            amountValue: preset.amountValue
        }, () => this.handleSubmit(preset.expectedResponse));
    }

    /**
     * Dirty API, allows passing an expected response for a submit, which serves to compare actual
     * output with an expected output. 
     * @param {} expectedResponse Optional string of expected submti response
     */
    handleSubmit(expectedResponse) {
        const paymentMethod = new PaymentMethod(this.state.amountValue, this.state.currency, this.state.countryCode);

        this.props.getPaymentMethods(paymentMethod, expectedResponse);
    }
}

export default GetPaymentMethods;


