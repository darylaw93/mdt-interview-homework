import React from 'react';
import HomeButton from './HomeButton';
import AnotherTransferButton from './AnotherTransferButton';

const TransferSuccessBox = ({
  customerAccountNo,
  customerName,
  transferAmount,
  transferComments,
}) => {
  return (
    <div className="summaryBox">
      <div className="circle">
        <div>✔</div>
      </div>
      <h3>Transferred</h3>
      <div>To</div>
      <div style={{ fontWeight: 'bold' }}>{customerName}</div>
      <div>{customerAccountNo}</div>
      <br />
      <div style={{ fontWeight: 'bold' }}>Amount in SGD </div>
      <div>
        ${' '}
        {transferAmount.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </div>
      <br />
      <div style={{ fontWeight: 'bold' }}>Comments </div>
      <div>{transferComments}</div>
      <HomeButton />
      <AnotherTransferButton />
    </div>
  );
};

export default TransferSuccessBox;
