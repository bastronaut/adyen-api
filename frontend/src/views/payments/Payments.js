
import React from 'react';
import PaymentsiDeal from './PaymentsiDeal';
import PaymentsCard from './PaymentsCard';
import PaymentsDropIn from './PaymentsDropIn';
import PaymentsResult from './PaymentsResult';
import Title from '../../components/Title';
import { IdealPayment } from '../dto/IdealPayment';
import { UnsecuredCardPayment } from '../dto/UnsecuredCardPayment';

/**
 * Massive state class deserves splitting and cleaning up. Can also think about sharing state between the different form types
 * to avoid filling in stuff multiple times
 */
class Payments extends React.Component {

    constructor(props) {
        super(props);

        // Defaults
        this.state = {
            activeTab: "ideal",
            amountValue: "0",
            currency: "EUR",
            countryCode: "NL",
            idealIssuer: "",
            reference: "",
            number: "",
            holderName: "",
            expiryYear: "",
            expiryMonth: "",
            cvc: "000",
        }

    }

    render() {
        return (
            <div className="my-5">
                <Title text="Payments" type="h1" />
                <div className="row">
                    <div className="col">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <span className={"nav-link " + (this.state.activeTab === 'ideal' ? 'active' : '')} onClick={() => this.setState({ activeTab: "ideal" })}> iDEAL payment</span>
                            </li>
                            <li className="nav-item">
                                <span className={"nav-link " + (this.state.activeTab === 'card' ? 'active' : '')} onClick={() => this.setState({ activeTab: "card" })}>Unsecured Card payment</span>
                            </li>
                            <li className="nav-item">
                                <span className={"nav-link " + (this.state.activeTab === 'drop-in' ? 'active' : '')} onClick={() => this.setState({ activeTab: "drop-in" })}>Drop-in components  </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="tab-content" id="myTabContent">
                    <div className={"tab-pane " + (this.state.activeTab === 'ideal' ? 'active' : '')} id="home" role="tabpanel" aria-labelledby="home-tab">
                        <PaymentsiDeal {...this.props}
                            amountValue={this.state.amountValue}
                            currency={this.state.currency}
                            countryCode={this.state.countryCode}
                            issuer={this.state.issuer}
                            handleSubmit={() => this.handleIdealSubmit()}
                            updateAmount={event => this.updateIdealAmountValue(event)}
                            updateCurrency={event => this.updateCurrency(event)}
                            updateCountryCode={event => this.updateCountryCode(event)}
                            updateIssuer={event => this.updateIdealIssuer(event)}
                            updatePaymentReference={event => this.updatePaymentReference(event)}
                            clickPresetTable={this.clickIdealPresetTable.bind(this)}

                        />
                    </div>
                    <div className={"tab-pane " + (this.state.activeTab === 'card' ? 'active' : '')} id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <PaymentsCard {...this.props} handleSubmit={() => this.handleCardSubmit()} />
                    </div>
                    <div className={"tab-pane " + (this.state.activeTab === 'drop-in' ? 'active' : '')} id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <PaymentsDropIn {...this.props} />
                    </div>
                </div>

                <PaymentsResult {...this.props} />


            </div>

        );
    }

    // Should have a class to prevent these massive nr of function arguments
    handleIdealSubmit(expectedResponse) {

        const idealPayment = new IdealPayment(this.state.amountValue, this.state.currency,
            this.state.countryCode, this.state.idealIssuer, this.state.reference);

        this.props.postIdealPayments(idealPayment);
    }

    handleCardSubmit(expectedResponse) {

        const unsecuredCardpayment = new UnsecuredCardPayment(this.state.amountValue, this.state.currency, this.card.countryCode,
            this.state.number, this.state.holderName, this.state.expiryYear, this.state.expiryMonth, this.state.cvc);

        this.props.postUnsecuredCardPayments(unsecuredCardpayment);
    }


    updateIdealAmountValue(event) {
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

    updateIdealIssuer(event) {
        this.setState({
            idealIssuer: event.target.value
        });
    }

    updatePaymentReference(event) {
        this.setState({
            reference: event.target.value
        });
    }

    clickIdealPresetTable(preset) {
        this.setState({
            countryCode: preset.countryCode,
            currency: preset.amount.currency,
            amountValue: preset.amount.value,
            idealIssuer: preset.paymentMethod.issuer,
            reference: preset.reference,

        }, () => this.handleIdealSubmit(preset.expectedResponse));
    }
}

export default Payments;


