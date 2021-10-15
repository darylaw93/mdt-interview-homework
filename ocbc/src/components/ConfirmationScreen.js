import React from 'react';
import axios from 'axios';

const ConfirmationScreen = ({
  customerName,
  customerAccountNo,
  setTransferInfo,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const comments = event.currentTarget.comments.value;

    axios
      .post(
        'http://localhost:8080/transfer',
        {
          recipientAccountNo: customerAccountNo,
          amount: event.currentTarget.amount.value,
          date: new Date(),
          description: event.currentTarget.comments.value,
        },
        {
          headers: {
            authorization: localStorage.getItem('access_token'),
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(
      event.currentTarget.comments.value,
      event.currentTarget.amount.value
    );
  };

  console.log(customerName, customerAccountNo);
  console.log(setTransferInfo);
  return (
    <div>
      <div>Transferring to{customerName}</div>
      <form onSubmit={handleSubmit}>
        <input name="amount" type="number" required />
        <input
          name="comments"
          type="text"
          maxLength="30"
          defaultValue="PayNow Transfer"
        />
        <button />
      </form>
    </div>
  );
};

export default ConfirmationScreen;
