
import React from 'react';
import Title from '../../components/Title';
import PaymentDetailsForm from './PaymentDetailsForm'
import { PaymentDetail } from '../dto/PaymentDetail'

class PaymentDetails extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            paymentData: "",
            paymentDetails: "",
        }
    }

    render() {
        return (
            <div className="mb-10 mb-5" id="paymentDetails">
                <Title text="Payment Details" type="h1" customClass="text-center" />
                <div className="row">
                    <div className="col">
                        <PaymentDetailsForm {...this.props}
                            paymentData={this.state.paymentData}
                            paymentDetails={this.state.paymentDetails}
                            updateData={(event) => this.updateData(event)}
                            updateDetails={(event) => this.updateDetails(event)}
                            handleSubmit={() => this.handleSubmit()} />
                    </div>
                    <div className="col-4">
                        <Title text="Presets" type="h3" />
                    </div>
                </div>
            </div>
        );
    }

    handleSubmit(expectedResponse) {
        const paymentDetail = new PaymentDetail(this.state.paymentData, this.state.paymentDetails);

        this.props.paymentDetails(paymentDetail, expectedResponse);
    }


    updateData(event) {
        this.setState({
            paymentData: event.target.value
        });
    }


    updateDetails(event) {
        this.setState({
            paymentDetails: event.target.value
        });
    }
}

export default PaymentDetails;


