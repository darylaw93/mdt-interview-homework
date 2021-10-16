import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Account from './AccountBalance';
const moment = require('moment');

const Transactions = () => {
  const [list, setList] = useState([]);
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:8080/account/transactions', {
        headers: {
          'content-type': 'application/json',
          Accept: 'application/json',
          authorization: localStorage.getItem('access_token'),
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const mappedTransaction = list.map((data, index) => {
    if (data.type === 'receive') {
      return (
        <div
          className="transactionBox"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
          key={index}
        >
          <div className="transactionDate" style={{ fontWeight: 'bold' }}>
            {moment(`${data.date}`).format('DD MMMM')}
          </div>
          <br />
          <div className="transactionContent">
            Received from {data.from?.accountHolderName}
          </div>
          <div className="transactionAmount" style={{ color: 'green' }}>
            {data.currency} +
            {data.amount.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
          <br />
          {isShown && <div>{data.description}</div>}
        </div>
      );
    } else {
      return (
        <div className="transactionBox" key={index}>
          <div className="transactionDate" style={{ fontWeight: 'bold' }}>
            {moment(`${data.date}`).format('DD MMMM')}
          </div>
          <br />
          <div className="transactionContent">
            Transferred to {data.to?.accountHolderName}{' '}
          </div>
          <div className="transactionAmount" style={{ color: 'red' }}>
            {data.currency} -
            {data.amount.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
          {isShown && <div>{data.description}</div>}
        </div>
      );
    }
  });

  return (
    <Account>
      <div className="transactionBody">{mappedTransaction}</div>
    </Account>
  );
};

export default Transactions;
