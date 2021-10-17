import React, { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
const ConfirmationBox = ({
  customerName,
  customerAccountNo,
  setTransferInfo,
}) => {
  const [isError, setIsError] = useState(false);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const transferComments = event.currentTarget.comments.value;
    const transferAmount = event.currentTarget.amount.value;
    const transferDate = new Date();

    axios
      .post(
        'http://localhost:8080/transfer',
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
        console.log(transferAmount);
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
    console.log(
      event.currentTarget.comments.value,
      event.currentTarget.amount.value
    );
  };
  return (
    <div className="confirmationBox">
      <div>Transferring to</div>
      <div style={{ fontWeight: 'bold' }}>{customerName}</div>
      <div>Bank Account No. {customerAccountNo}</div>
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
  );
};

export default ConfirmationBox;
