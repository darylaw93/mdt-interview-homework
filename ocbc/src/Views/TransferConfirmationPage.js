import React, { useContext } from 'react';
import { LoggedContext } from '../App.js';
import { useHistory } from 'react-router';
import ConfirmationBox from '../components/TransferConfirmationPageComponents/ConfirmationBox.js';

const ConfirmationScreen = () => {
  const history = useHistory();
  const loggedContext = useContext(LoggedContext);

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
