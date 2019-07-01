
import React from 'react';
import PaymentsiDeal from './PaymentsiDeal';
import PaymentsCard from './PaymentsCard';
import PaymentsDropIn from './PaymentsDropIn';
import PaymentsCard3DS from './PaymentsCard3DS';
import PaymentsResult from './PaymentsResult';
import Title from '../../components/Title';
import { IdealPayment } from '../dto/IdealPayment';
import { UnsecuredCardPayment } from '../dto/UnsecuredCardPayment';

/**
 * Massive state class deserves splitting and cleaning up. Done in a rush, probably run away
 * 
 * Unless specified, all cards use the following expiry dates and security codes:
 * Expiry Date	CVV2 / CVC3	CID (American Express)
 *   10/2020	737	7373
 *   03/2030	737	7373
 * 
 * https://docs.adyen.com/development-resources/test-cards/test-card-numbers/#visa
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
            cvc: "",
        }

    }

    render() {
        return (
            <div className="mb-10">
                <Title text="Payments" type="h1" customClass="text-center" />
                <div className="row my-4">
                    <div className="col">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <span className={"nav-link " + (this.state.activeTab === 'ideal' ? 'active' : '')} onClick={() => this.setState({ activeTab: "ideal" })}> iDEAL payment</span>
                            </li>
                            <li className="nav-item">
                                <span className={"nav-link " + (this.state.activeTab === 'card' ? 'active' : '')} onClick={() => this.setState({ activeTab: "card" })}>Unsecured fields Card</span>
                            </li>
                            <li className="nav-item">
                                <span className={"nav-link " + (this.state.activeTab === '3DS1' ? 'active' : '')} onClick={() => this.setState({ activeTab: "3DS1" })}>Unsecured fields 3DSecure1 </span>
                            </li>
                            <li className="nav-item">
                                <span className={"nav-link " + (this.state.activeTab === '3DS2' ? 'active' : '')} onClick={() => this.setState({ activeTab: "3DS2" })}>Unsecured fields 3DSecure2 </span>
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
                            issuer={this.state.idealIssuer}
                            reference={this.state.reference}
                            handleSubmit={() => this.handleIdealSubmit()}
                            updateAmount={event => this.updateAmountValue(event)}
                            updateCurrency={event => this.updateCurrency(event)}
                            updateCountryCode={event => this.updateCountryCode(event)}
                            updateIssuer={event => this.updateIdealIssuer(event)}
                            updatePaymentReference={event => this.updatePaymentReference(event)}
                            clickPresetTable={this.clickIdealPresetTable.bind(this)}

                        />
                    </div>
                    <div className={"tab-pane " + (this.state.activeTab === 'card' ? 'active' : '')} id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <PaymentsCard {...this.props}
                            amountValue={this.state.amountValue}
                            currency={this.state.currency}
                            countryCode={this.state.countryCode}
                            reference={this.state.reference}
                            number={this.state.number}
                            holderName={this.state.holderName}
                            expiryYear={this.state.expiryYear}
                            expiryMonth={this.state.expiryMonth}
                            cvc={this.state.cvc}
                            updateAmount={event => this.updateAmountValue(event)}
                            updateCurrency={event => this.updateCurrency(event)}
                            updateCountryCode={event => this.updateCountryCode(event)}
                            updateIssuer={event => this.updateIdealIssuer(event)}
                            updatePaymentReference={event => this.updatePaymentReference(event)}
                            updateNumber={event => this.updateNumber(event)}
                            updateHolderName={event => this.updateHolderName(event)}
                            updateExpiryYear={event => this.updateExpiryYear(event)}
                            updateExpiryMonth={event => this.updateExpiryMonth(event)}
                            updateCVC={event => this.updateCVC(event)}
                            handleSubmit={() => this.handleCardSubmit()}
                            clickPresetTable={this.clickUnsecuredCardPresetTable.bind(this)} />
                    </div>
                    <div className={"tab-pane " + (this.state.activeTab === '3DS1' ? 'active' : '')} id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <PaymentsCard3DS {...this.props}
                            amountValue={this.state.amountValue}
                            currency={this.state.currency}
                            countryCode={this.state.countryCode}
                            reference={this.state.reference}
                            number={this.state.number}
                            holderName={this.state.holderName}
                            expiryYear={this.state.expiryYear}
                            expiryMonth={this.state.expiryMonth}
                            cvc={this.state.cvc}
                            updateAmount={event => this.updateAmountValue(event)}
                            updateCurrency={event => this.updateCurrency(event)}
                            updateCountryCode={event => this.updateCountryCode(event)}
                            updateIssuer={event => this.updateIdealIssuer(event)}
                            updatePaymentReference={event => this.updatePaymentReference(event)}
                            updateNumber={event => this.updateNumber(event)}
                            updateHolderName={event => this.updateHolderName(event)}
                            updateExpiryYear={event => this.updateExpiryYear(event)}
                            updateExpiryMonth={event => this.updateExpiryMonth(event)}
                            updateCVC={event => this.updateCVC(event)}
                            handleSubmit={() => this.handleCardSubmit3DS()}
                        />
                    </div>
                    <div className={"tab-pane " + (this.state.activeTab === '3DS2' ? 'active' : '')} id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        todo
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

        this.props.postIdealPayments(idealPayment, expectedResponse);
    }

    handleCardSubmit(expectedResponse) {

        const unsecuredCardpayment = new UnsecuredCardPayment(this.state.amountValue, this.state.currency, this.state.countryCode,
            this.state.number, this.state.holderName, this.state.expiryYear, this.state.expiryMonth, this.state.cvc, this.state.reference);

        this.props.postUnsecuredCardPayments(unsecuredCardpayment, expectedResponse);
    }

    handleCardSubmit3DS(expectedResponse) {

        const unsecuredCardpayment = new UnsecuredCardPayment(this.state.amountValue, this.state.currency, this.state.countryCode,
            this.state.number, this.state.holderName, this.state.expiryYear, this.state.expiryMonth, this.state.cvc, this.state.reference, true);

        this.props.postUnsecuredCardPayments(unsecuredCardpayment, expectedResponse);
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

    updateNumber(event) {
        this.setState({
            number: event.target.value
        });
    }

    updateHolderName(event) {
        this.setState({
            holderName: event.target.value
        });
    }

    updateExpiryYear(event) {
        this.setState({
            expiryYear: event.target.value
        });
    }

    updateExpiryMonth(event) {
        this.setState({
            expiryMonth: event.target.value
        });
    }

    updateCVC(event) {
        console.log("updating");
        this.setState({
            cvc: event.target.value
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


    clickUnsecuredCardPresetTable(preset) {
        this.setState({
            countryCode: preset.countryCode,
            currency: preset.amount.currency,
            amountValue: preset.amount.value,
            reference: preset.reference,
            number: preset.number,
            number: preset.number,
            holderName: preset.holderName,
            expiryYear: preset.expiryYear,
            expiryMonth: preset.expiryMonth,
            cvc: preset.cvc
        }, () => this.handleCardSubmit(preset.expectedResponse));
    }
}

export default Payments;


