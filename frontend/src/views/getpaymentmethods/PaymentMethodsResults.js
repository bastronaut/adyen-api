
import React from 'react';
import Alert from '../../components/Alert';

const DEFAULTBLANKMESSAGE = 'Get Payment Methods response';
const DEFAULTEXPECTEDMESSAGE = 'Get Payment Methods expected result';
function GetPaymentsResult(props) {


    return (
        <div className='get-payments-results my-4'>
            <div className='row'>
                <div className='col-sm'>
                    <Alert customClass='secondary'
                        id='getPaymentMethodsResult'
                        text={props.paymentMethods ? props.paymentMethods : DEFAULTBLANKMESSAGE} />
                </div>
                <div className='col-sm'>
                    <Alert customClass='success' id='getPaymentMethodsExpectedResult' text={props.expectedResponse ? props.expectedResponse : DEFAULTEXPECTEDMESSAGE} />
                </div>
            </div>
        </div>
    );
}

export default GetPaymentsResult;


 