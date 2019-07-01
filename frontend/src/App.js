import React from 'react';
import GetPaymentMethods from './views/getpaymentmethods/PaymentMethods';
import Payments from './views/payments/Payments';
import PaymentDetails from './views/paymentdetails/PaymentDetails';
import Navigation from './components/Navigation';
import './css/App.css';

function App(props) {
  return (
    <div className="App container mb-5">
      <Navigation {...props} />
      <hr className="my-4" />

      <GetPaymentMethods {...props} />
      <hr className="my-2" />
      <Payments {...props} />


      <hr className="my-2" />
      <PaymentDetails {...props} />

    </div>
  );
}

export default App;
