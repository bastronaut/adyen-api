
import React from 'react';
import Title from '../../components/Title';

function PaymentDetails(props) {
    return (
        <div className="my-5" id="paymentDetails">
            <Title text="Payment Details" type="h1" />
            <div className="row">
                <div className="col">
                    <Title text="Payment Details form" type="h3" />
                </div>
                <div className="col-4">
                    <Title text="Presets" type="h3" />
                </div>
            </div>


        </div>
    );
}

export default PaymentDetails;


