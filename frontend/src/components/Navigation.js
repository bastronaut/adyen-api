

import React from 'react';
import Title from './Title';

function Navigation(props) {

    return (
        <div>
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link" href="#getPaymentMethodsForm">Get Payment Methods</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#paymentsForm">Payments</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#paymentDetails">Payment Details</a>
                </li>
            </ul>
            <Title text="Adyen API experiments" customClass="green my-4 headertext" type="h4" />
        </div>
    );
}

export default Navigation;


