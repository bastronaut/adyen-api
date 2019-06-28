
import React from 'react';
import Alert from '../../components/Alert';
import Title from '../../components/Title';

const DEFAULTBLANKMESSAGE = '{}';
const DEFAULTEXPECTEDMESSAGE = 'Expected results are available for presets';
function GetPaymentMethodsResult(props) {


    return (
        <div className='get-payments-results my-4'>
            <div className='row'>
                <div className='col-sm'>
                    <Title text="Response" type="h5" />
                    <Alert customClass='secondary'
                        id='getPaymentMethodsResult'
                        text={props.paymentMethods.result ? props.paymentMethods.result : DEFAULTBLANKMESSAGE} />
                </div>
                <div className='col-sm'>
                    <Title text="Expected response" type="h5" />
                    <Alert customClass='success' id='getPaymentMethodsExpectedResult'
                        text={props.paymentMethods.expectedResult ? props.paymentMethods.expectedResult : DEFAULTEXPECTEDMESSAGE} />
                </div>
            </div>
        </div>
    );
}

export default GetPaymentMethodsResult;


