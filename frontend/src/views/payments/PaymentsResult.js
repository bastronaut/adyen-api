
import React from 'react';
import Alert from '../../components/Alert';
import Title from '../../components/Title';

const DEFAULTBLANKMESSAGE = '{}';
const DEFAULTEXPECTEDMESSAGE = 'Expected results are available for presets';

function PaymentsResult(props) {
    return (
        <div className='payments-results my-4'>
            <div className='row'>
                <div className='col-sm-6'>
                    <Title text="Response" type="h5" />
                    <Alert customClass='secondary'
                        id='getPaymentMethodsResult'
                        text={props.payments.result ? props.payments.result : DEFAULTBLANKMESSAGE} />
                </div>
                <div className='col-sm-6'>
                    <Title text="Expected response" type="h5" />
                    <Alert customClass='success' id='getPaymentMethodsExpectedResult'
                        text={props.payments.expectedResult ? props.payments.expectedResult : DEFAULTEXPECTEDMESSAGE} />
                </div>
            </div>
        </div>
    );
}

export default PaymentsResult;


