import React, { useState } from 'react';

const AccountBalanceScreen = ({ balance, currentTime, hide, setHide }) => {
  const [showBalanceToggle, setShowBalanceToggle] = useState('Show Balance');

  const handleClick = (event) => {
    event.preventDefault();
    setHide((prevHide) => !prevHide);
    if (showBalanceToggle === 'Hide Balance') {
      return setShowBalanceToggle('Show Balance');
    } else {
      return setShowBalanceToggle('Hide Balance');
    }
  };
  return (
    <div className="accountBalance">
      <h1>Account Balance</h1>
      <button className="accountBalanceButton" onClick={handleClick}>
        {showBalanceToggle}
      </button>
      {hide && (
        <h2 className="balance">
          $
          {balance.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </h2>
      )}
      {hide && <div>As of {currentTime}</div>}
    </div>
  );
};

export default AccountBalanceScreen;
