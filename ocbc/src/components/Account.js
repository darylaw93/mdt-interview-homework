import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Account = () => {
  const [date, setDate] = useState(new Date().getHours());
  const [currentTime, setCurrenttime] = useState(new Date().toLocaleString());
  const [balance, setBalance] = useState('');
  const [hide, setHide] = useState(false);
  const [showBalanceToggle, setShowBalanceToggle] = useState('Show Balance');

  const username = localStorage.getItem('username');

  const greeting = (element) => {
    if (element <= 16 && element > 12) {
      return 'afternoon';
    } else if (element > 16 || element < 2) {
      return 'evening';
    } else if (element >= 2 && element <= 12) {
      return 'morning';
    } else {
      return 'day';
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log(showBalanceToggle);
    setHide((prevHide) => !prevHide);
    if (showBalanceToggle === 'Hide Balance') {
      return setShowBalanceToggle('Show Balance');
    } else {
      return setShowBalanceToggle('Hide Balance');
    }
  };

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
        console.log('called');
        setBalance(res.data.balance);
        setCurrenttime(new Date().toLocaleString());
      })
      .catch((err) => {
        console.log(err);
      });
  }, [hide]);

  return (
    <div>
      <h2>
        Good {greeting(date)},{' '}
        {username[0].toLocaleUpperCase() + username.slice(1)}!
      </h2>
      <div className="accountBalance">
        <h1>Account Balance</h1>
        <a onClick={handleClick}>{showBalanceToggle}</a>
        {hide && (
          <h2 className="balance">
            $
            {balance.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </h2>
        )}
        {hide && <a>As of {currentTime}</a>}
      </div>
      <br />
    </div>
  );
};

export default Account;
