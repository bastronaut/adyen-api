
import React from 'react';
import GetPaymentMethodsForm from './PaymentMethodsForm'
import GetPaymentsResult from './PaymentMethodsResults'
import GetPaymentMethodsPresetsTable from './PaymentMethodsPresetsTable'
import Title from '../../components/Title';

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
            <div>

                <Title text="Payment Methods" type="h1" />
                <div className="row">
                    <div className="col">
                        <Title text="Get payment methods" type="h3" />
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

    handleSubmit(expectedResponse) {
        this.props.getPaymentMethods(this.state.amountValue, this.state.currency, this.state.countryCode, expectedResponse);
    }
}

export default GetPaymentMethods;


