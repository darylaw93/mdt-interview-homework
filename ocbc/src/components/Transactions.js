import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Account from './AccountBalance';

const Transactions = () => {
  const [list, setList] = useState([]);

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
        <div className="transactionBox" key={index}>
          <div className="transactionName">{data.from?.accountHolderName} </div>

          <div className="transactionAmount">
            {data.amount.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
          <div className="transactionCurrency">{data.currency} </div>
          <br />
          <div className="transactionType">{data.type}</div>
        </div>
      );
    } else {
      return (
        <div className="transactionBox" key={index}>
          <div className="transactionName">{data.to?.accountHolderName} </div>

          <div className="transactionAmount">
            {data.amount.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
          <div className="transactionCurrency">{data.currency} </div>
          <br />
          <div className="transactionType">{data.type}</div>
        </div>
      );
    }
  });

  return (
    <Account>
      <div>{mappedTransaction}</div>
    </Account>
  );
};

export default Transactions;