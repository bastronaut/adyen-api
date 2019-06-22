import React from 'react';
import GetPayments from './views/getpayments/GetPayments';
import Payments from './views/payments/Payments';
import Title from './components/Title';
import Navigation from './components/Navigation';
import './css/App.css';

function App(props) {
  return (
    <div className="App container">
      <Navigation {...props} />
      <Title text="Adyen API experiments" customClass="green my-4 headertext" />
      <hr className="my-2" />

      <GetPayments {...props} />
      <hr className="my-2" />
      <Payments {...props} />

    </div>
  );
}

export default App;
