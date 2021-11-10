import React from 'react';
import { useHistory } from 'react-router';
const TransferButton = () => {
  const history = useHistory();
  return (
    <div
      style={{
        display: 'inline-block',
        marginLeft: '10px',
        height: '70px',
        width: '80px',
      }}
    >
      <button
        onClick={() => {
          history.push('/transfer');
        }}
        className="transferButton"
        style={{
          textAlign: 'center',
          width: '40px',
          height: '40px',
        }}
      >
        ⇌
      </button>
      <div style={{ fontSize: '12px', paddingTop: '5px' }}>Transfer</div>
    </div>
  );
};

export default TransferButton;
