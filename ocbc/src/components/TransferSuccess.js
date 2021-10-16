import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { LoggedContext } from '../App';
const TransferSuccess = () => {
  const history = useHistory();
  const loggedContext = useContext(LoggedContext);
  return (
    <>
      <h1>Transfer Summary</h1>
      <div className="summaryBox">
        <div className="circle">
          <div>✔</div>
        </div>
        <h3>Transferred</h3>
        <div>To</div>
        <div style={{ fontWeight: 'bold' }}>{loggedContext.customerName}</div>
        <div>{loggedContext.customerAccountNo}</div>
        <br />
        <div style={{ fontWeight: 'bold' }}>Amount in SGD </div>
        <div>
          ${' '}
          {loggedContext.transferAmount.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </div>
        <br />
        <div style={{ fontWeight: 'bold' }}>Comments </div>
        <div>{loggedContext.transferComments}</div>
        <button className="homeButton" onClick={() => history.push('/account')}>
          Home
        </button>
        <button
          className="anotherTransferButton"
          onClick={() => history.push('/transfer')}
        >
          Make Another Transfer
        </button>
      </div>
    </>
  );
};

export default TransferSuccess;
