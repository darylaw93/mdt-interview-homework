import React, { useState, useEffect, useContext } from 'react';
import { LoggedContext } from '../App.js';
import axios from 'axios';
import Greeting from '../components/AccountBalancePageComponents/Greeting';
import AccountBalanceScreen from '../components/AccountBalancePageComponents/AccountBalanceBox';
import TransferButton from '../components/AccountBalancePageComponents/TransferButton';
import LogOutButton from '../components/AccountBalancePageComponents/LogOutButton';

const moment = require('moment');

const Account = (props) => {
  const loggedContext = useContext(LoggedContext);
  const date = new Date().getHours();
  const [currentTime, setCurrenttime] = useState(new Date().toLocaleString());
  const [hide, setHide] = useState(false);
  const username = localStorage.getItem('username');

  useEffect(() => {
    axios
      .get('/account/balances', {
        headers: {
          'content-type': 'application/json',
          Accept: 'application/json',
          authorization: localStorage.getItem('access_token'),
        },
      })
      .then((res) => {
        loggedContext.setBalance(res.data.balance);
        setCurrenttime(moment(new Date()).format('DD MMM YYYY, h:mm:ss a'));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [hide]);

  return (
    <div>
      <Greeting date={date} username={username} />
      <AccountBalanceScreen
        balance={loggedContext.balance}
        setHide={setHide}
        hide={hide}
        currentTime={currentTime}
      />
      <TransferButton />
      <LogOutButton />
      <br />
      <div>{props.children}</div>
    </div>
  );
};

export default Account;
