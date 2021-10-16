import React from 'react';
import { useHistory } from 'react-router';
const TransferSuccess = ({
  customerName,
  customerAccountNo,
  transferAmount,
  transferDate,
  transferComments,
}) => {
  const history = useHistory();
  return (
    <div>
      <div>Transfer Summary</div>
      <div>
        To {customerName}, {customerAccountNo}
      </div>
      <div>SGD {transferAmount}</div>
      <div>on {transferDate}</div>
      <div>Comments {transferComments}</div>
      <button onClick={() => history.push('/account')}>Home</button>
      <button onClick={() => history.push('/transfer')}>
        Make Another Transfer
      </button>
    </div>
  );
};

export default TransferSuccess;
