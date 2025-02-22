import React, { useState, useContext } from 'react';
import { LoggedContext } from '../../App';
import { useHistory } from 'react-router';
import axios from 'axios';
const ConfirmationBox = ({
  customerName,
  customerAccountNo,
  setTransferInfo,
}) => {
  const loggedContext = useContext(LoggedContext);
  const [isError, setIsError] = useState(false);
  const [limitError, setLimitError] = useState(false);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const transferComments = event.currentTarget.comments.value;
    const transferAmount = event.currentTarget.amount.value;
    const transferDate = new Date();
    if (transferAmount > loggedContext.balance) {
      setLimitError(true);
    } else {
      axios
        .post(
          '/transfer',
          {
            recipientAccountNo: customerAccountNo,
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
          if (res.status === 200) {
            setTransferInfo({
              transferAmount: transferAmount,
              transferComments: transferComments,
            });
            history.push('/success');
          }
        })
        .catch((err) => {
          console.log(err);
          setIsError(true);
        });
    }
  };
  return (
    <div className="confirmationBox">
      <div>Transferring to</div>
      <div style={{ fontWeight: 'bold' }}>{customerName}</div>
      <div>Account No. {customerAccountNo}</div>
      <br />
      <form onSubmit={handleSubmit}>
        <div>Transfer Amount</div>
        <input
          className="searchForm"
          name="amount"
          type="number"
          min="0.01"
          step=".01"
          placeholder="Amount in SGD"
          required
        />
        <div>Comments for Recipient</div>
        <input
          className="searchForm"
          name="comments"
          type="text"
          maxLength="30"
          defaultValue="OCBC Transfer"
        />{' '}
        {isError && (
          <div style={{ color: 'red' }}>
            There was an error in your transfer, please try again
          </div>
        )}
        {limitError && (
          <div style={{ color: 'red' }}>Not Enough Account Limit</div>
        )}
        <button className="confirmationButton">Transfer Now</button>
      </form>
    </div>
  );
};

export default ConfirmationBox;
