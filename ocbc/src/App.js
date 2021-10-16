import './App.css';
import React, { useState, createContext } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Transactions from './components/Transactions';
import Transfer from './components/Transfer';
import ConfirmationScreen from './components/ConfirmationScreen';
import TransferSuccess from './components/TransferSuccess';

export const LoggedContext = createContext();

function App() {
  const [customerInfo, setCustomerInfo] = useState({
    customerName: '',
    customerAccountNo: '',
  });
  const [transferInfo, setTransferInfo] = useState({
    transferAmount: '',
    transferComments: '',
  });

  const superProps = {
    ...customerInfo,
    setCustomerInfo,
    ...transferInfo,
    setTransferInfo,
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
              <button>
                <Link to="/">Login</Link>
              </button>
            </div>
          )
        }
      />
    );
  };

  return (
    <div className="App">
      <LoggedContext.Provider value={superProps}>
        <main>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <PrivateRoute path="/account" component={Transactions} />
            <PrivateRoute path="/transfer" component={Transfer} />
            <PrivateRoute path="/confirmation" component={ConfirmationScreen} />
            <PrivateRoute path="/success" component={TransferSuccess} />
            <Redirect to="/" />
          </Switch>
        </main>
      </LoggedContext.Provider>
    </div>
  );
}

export default App;
