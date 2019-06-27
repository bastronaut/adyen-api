
import React from 'react';
import PaymentsiDeal from './PaymentsiDeal';
import PaymentsCard from './PaymentsCard';
import PaymentsDropIn from './PaymentsDropIn';
import Title from '../../components/Title';

function Payments(props) {
    return (
        <div className="my-5">
            <Title text="Payments" type="h1" />
            <div className="row">
                <div className="col">
                    <ul class="nav nav-tabs my-4">
                        <li class="nav-item">
                            <a class="nav-link active" >iDEAL payment</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">Credit Card payment</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">Drop-in components  </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <PaymentsiDeal {...props} />
            </div>
            <div>
                <PaymentsCard {...props} />
            </div>
            <div>
                <PaymentsDropIn {...props} />
            </div>
        </div>
    );
}

export default Payments;


