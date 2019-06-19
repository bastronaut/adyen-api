
import React from 'react';
import Alert from '../../components/Alert';


function GetPaymentsResult(props) {
    return (
        <div className="get-payments-results my-4">
            <div className="row">
                <div className="col-sm">
                    <Alert customClass="secondary" id="getPaymentMethodsResult" text="Get Payment Methods response" />
                </div>
                <div className="col-sm">
                    <Alert customClass="success" id="getPaymentMethodsExpectedResult" text="Get Payment Methods expected result" />
                </div>
            </div>
        </div>
    );
}

export default GetPaymentsResult;


