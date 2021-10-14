import React, { useState } from 'react';

const Account = () => {
  const [date, setDate] = useState(new Date().getHours());
  const username = localStorage.getItem('username');

  const greeting = (element) => {
    element = 16;
    if (element <= 16 && element > 12) {
      return 'afternoon';
    } else if (element > 16 && element < 5) {
      return 'evening';
    } else {
      return 'morning';
    }
  };

  return (
    <div>
      <h2>
        Good {greeting(date)}, {username}!
      </h2>
      <div className="accountBalance">
        <h1>Account Balance</h1>
        <h2></h2>
      </div>
    </div>
  );
};

export default Account;
