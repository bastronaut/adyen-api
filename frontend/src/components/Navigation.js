

import React from 'react';
// import Title from './Title';

function Navigation(props) {

    return (
        <div className="row my-4">
            <div className="col" >
                <p className="green headertext">Adyen API experiments</p>
            </div>
            <div className="col">
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
            </div>

        </div>
    );
}

export default Navigation;


