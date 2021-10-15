import './App.css';
import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Transactions from './components/Transactions';
import Transfer from './components/Transfer';
import ConfirmationScreen from './components/ConfirmationScreen';
import TransferSuccess from './components/TransferSuccess';

function App() {
  const [customerInfo, setCustomerInfo] = useState({
    customerName: 'hello',
    customerAccountNo: '123456',
  });

  const [transferInfo, setTransferInfo] = useState({
    customerName: '',
    customerAccountNo: '',
    amountTransferred: '',
  });
  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/account">
            <Transactions />
          </Route>
          <Route path="/transfer">
            <Transfer setCustomerInfo={setCustomerInfo} />
          </Route>
          <Route path="/confirmation">
            <ConfirmationScreen
              {...customerInfo}
              setTransferInfo={setTransferInfo}
            />
          </Route>
          <Route path="/transferSuccess" {...transferInfo}>
            <TransferSuccess />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
