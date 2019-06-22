

import React from 'react';

function Navigation(props) {

    return (
        <ul className="nav">
            <li className="nav-item">
                <a className="nav-link" href="#getPaymentMethodsForm">Get Payment Methods</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#paymentsForm">Payments</a>
            </li>
        </ul>
    );
}

export default Navigation;


