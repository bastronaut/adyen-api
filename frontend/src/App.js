import React from 'react';
import GetPayments from './views/getpayments/GetPayments';
import Payments from './views/payments/Payments';
import Title from './components/Title';
import Navigation from './components/Navigation';
import './css/App.css';

function App() {
  return (
    <div className="App container">
      <Navigation />
      <Title text="Adyen API experiments" customClass="green my-4 headertext" />
      <hr class="my-2" />

      <GetPayments />
      <hr class="my-2" />
      <Payments />

    </div>
  );
}

export default App;
