import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Greeting from '../components/AccountBalancePageComponents/Greeting';
import AccountBalanceScreen from '../components/AccountBalancePageComponents/AccountBalanceBox';
import TransferButton from '../components/AccountBalancePageComponents/TransferButton';
import LogOutButton from '../components/AccountBalancePageComponents/LogOutButton';
const moment = require('moment');
const Account = (props) => {
  const date = new Date().getHours();
  const [currentTime, setCurrenttime] = useState(new Date().toLocaleString());
  const [balance, setBalance] = useState('');
  const [hide, setHide] = useState(false);
  const username = localStorage.getItem('username');

  useEffect(() => {
    axios
      .get('http://localhost:8080/account/balances', {
        headers: {
          'content-type': 'application/json',
          Accept: 'application/json',
          authorization: localStorage.getItem('access_token'),
        },
      })
      .then((res) => {
        setBalance(res.data.balance);
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
        balance={balance}
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
