import './App.css';
import React, { useState, createContext } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import LandingPage from './Views/LandingPage';
import Transactions from './components/AccountBalancePageComponents/Transactions';
import Transfer from './Views/TransferRecipientPage';
import ConfirmationScreen from './Views/TransferConfirmationPage';
import TransferSuccess from './Views/TransferSuccess';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';

export const LoggedContext = createContext();
axios.defaults.baseURL = 'http://localhost:8080';

function App() {
  const [customerInfo, setCustomerInfo] = useState({
    customerName: '',
    customerAccountNo: '',
  });
  const [transferInfo, setTransferInfo] = useState({
    transferAmount: '',
    transferComments: '',
  });

  const [balance, setBalance] = useState('');

  const superProps = {
    ...customerInfo,
    setCustomerInfo,
    ...transferInfo,
    setTransferInfo,
    balance,
    setBalance,
  };

  const PrivateRoute = ({ component: Component, handleChildFunc, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          localStorage.getItem('access_token') !== null ? (
            <Component {...props} handleChildFunc={handleChildFunc} />
          ) : (
            <div className="center">
              Please Login To Access
              <br />
              <button className="accountBalanceButton">
                <Link to="/">Login</Link>
              </button>
            </div>
          )
        }
      />
    );
  };

  return (
    <Router>
      <div className="App">
        <LoggedContext.Provider value={superProps}>
          <main>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <PrivateRoute path="/account" component={Transactions} />
              <PrivateRoute path="/transfer" component={Transfer} />
              <PrivateRoute
                path="/confirmation"
                component={ConfirmationScreen}
              />
              <PrivateRoute path="/success" component={TransferSuccess} />
              <Redirect to="/" />
            </Switch>
          </main>
        </LoggedContext.Provider>
      </div>
    </Router>
  );
}

export default App;
