
import React from 'react';
import PaymentsForm from './PaymentsForm';
import PaymentsResult from './PaymentsResult';
import PaymentsPresetsTable from './PaymentsPresetsTable';
import Title from '../../components/Title';

function Payments(props) {
    return (
        <div className="my-5">
            <Title text="Payments" type="h1" />
            <div className="row">
                <div className="col">
                    <Title text="Payments POST form" type="h3" />
                    <PaymentsForm />
                </div>
                <div className="col-4">
                    <Title text="Presets" type="h3" />
                    <PaymentsPresetsTable />
                </div>
            </div>

            <PaymentsResult />
        </div>
    );
}

export default Payments;


