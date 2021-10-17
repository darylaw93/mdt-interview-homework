import React, { useState, useContext } from 'react';
import { LoggedContext } from '../App.js';
import { useHistory } from 'react-router';
import axios from 'axios';
import ConfirmationBox from '../components/TransferConfirmationPageComponents/ConfirmationBox.js';

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
      <ConfirmationBox
        customerName={loggedContext.customerName}
        customerAccountNo={loggedContext.customerAccountNo}
        setTransferInfo={loggedContext.setTransferInfo}
      />
    </>
  );
};

export default ConfirmationScreen;
