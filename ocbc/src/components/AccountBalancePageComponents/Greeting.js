import React from 'react';

const Greeting = ({ date, username }) => {
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
  return (
    <h2>
      Good {greeting(date)},{' '}
      {username[0].toLocaleUpperCase() + username.slice(1)}!
    </h2>
  );
};

export default Greeting;
