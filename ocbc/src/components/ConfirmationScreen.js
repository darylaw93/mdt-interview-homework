import React, { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';

const ConfirmationScreen = ({
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
        if (res.status === 200) {
          setTransferInfo({
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

  console.log(customerName, customerAccountNo);
  return (
    <div>
      <div>Transferring to{customerName}</div>
      <form onSubmit={handleSubmit}>
        <input name="amount" type="number" min="0.01" required />
        <input
          name="comments"
          type="text"
          maxLength="30"
          defaultValue="PayNow Transfer"
        />
        <button />
      </form>
      {isError && (
        <div>There was an error in your transfer, please try again</div>
      )}
    </div>
  );
};

export default ConfirmationScreen;
