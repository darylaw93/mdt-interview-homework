import React, { useState, useContext } from 'react';
import { LoggedContext } from '../App.js';
import { useHistory } from 'react-router';
import axios from 'axios';

const ConfirmationScreen = () => {
  const [isError, setIsError] = useState(false);
  const history = useHistory();
  const loggedContext = useContext(LoggedContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const transferComments = event.currentTarget.comments.value;
    const transferAmount = event.currentTarget.amount.value;
    const transferDate = new Date();

    axios
      .post(
        'http://localhost:8080/transfer',
        {
          recipientAccountNo: loggedContext.customerAccountNo,
          amount: transferAmount,
          date: transferDate,
          description: transferComments,
        },
        {
          headers: {
            authorization: localStorage.getItem('access_token'),
          },
        }
      )
      .then((res) => {
        console.log(transferAmount);
        if (res.status === 200) {
          loggedContext.setTransferInfo({
            transferAmount: transferAmount,
            transferComments: transferComments,
          });
          history.push('/transferSuccess');
        }
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      });
    console.log(
      event.currentTarget.comments.value,
      event.currentTarget.amount.value
    );
  };

  console.log(loggedContext.customerName, loggedContext.customerAccountNo);
  return (
    <>
      <div
        style={{
          float: 'left',
          margin: '5px',
          fontSize: '20px',
          cursor: 'pointer',
        }}
        onClick={() => {
          history.push('/transfer');
        }}
      >
        ❮ Back
      </div>
      <br />
      <h1>Pay To Account</h1>
      <div className="confirmationBox">
        <div>Transferring to</div>
        <div style={{ fontWeight: 'bold' }}>{loggedContext.customerName}</div>
        <div>Bank Account No. {loggedContext.customerAccountNo}</div>
        <br />
        <form onSubmit={handleSubmit}>
          <div>Amount in SGD</div>
          <input
            className="searchForm"
            name="amount"
            type="number"
            min="0.01"
            step=".01"
            required
          />
          <div>Add Comments for Recipient</div>
          <input
            className="searchForm"
            name="comments"
            type="text"
            maxLength="30"
            defaultValue="PayNow Transfer"
            style={{ lineHeight: '2em' }}
          />
          <button className="confirmationButton">Transfer Now</button>
        </form>
        {isError && (
          <div>There was an error in your transfer, please try again</div>
        )}
      </div>
    </>
  );
};

export default ConfirmationScreen;
