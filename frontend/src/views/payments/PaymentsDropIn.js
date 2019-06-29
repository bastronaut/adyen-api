import React from 'react';
import PaymentsPresetsTable from './PaymentsiDealPresetsTable';
import Title from '../../components/Title';

function PaymentsDropIn(props) {
    return (
        <div className="row">
            <div className="col">
                <Title text="Payments Drop In Components" type="h3" />

                
            </div>
            <div className="col-4">
                <Title text="Presets" type="h3" />
                <PaymentsPresetsTable />
            </div>
        </div>

    );
}

export default PaymentsDropIn;


{/* <script src="https://checkoutshopper-live.adyen.com/checkoutshopper/sdk/3.0.0/adyen.js"></script>

<link rel="stylesheet" href="https://checkoutshopper-live.adyen.com/checkoutshopper/sdk/3.0.0/adyen.css" />

 */}
