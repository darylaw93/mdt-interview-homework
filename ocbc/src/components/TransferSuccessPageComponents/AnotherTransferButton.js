import React from 'react';
import { useHistory } from 'react-router';

const AnotherTransferButton = () => {
  const history = useHistory();
  return (
    <button
      className="anotherTransferButton"
      onClick={() => history.push('/transfer')}
    >
      Make Another Transfer
    </button>
  );
};

export default AnotherTransferButton;
