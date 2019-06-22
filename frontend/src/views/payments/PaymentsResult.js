
import React from 'react';
import Alert from '../../components/Alert';


function PaymentsResult(props) {
    return (
        <div className="get-payments-results my-4" id="paymentsResults">
            <div className="row">
                <div className="col-sm">
                    <Alert customClass="secondary" id="paymentsResult" text="POST Payments response" />
                </div>
                <div className="col-sm">
                    <Alert customClass="success" id="paymentsExpectedResult" text="Payments expected result" />
                </div>
            </div>
        </div>
    );
}

export default PaymentsResult;


