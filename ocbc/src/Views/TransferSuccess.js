import React, { useContext } from 'react';
import TransferSuccessBox from '../components/TransferSuccessPageComponents/TransferSuccessBox';
import { LoggedContext } from '../App';
const TransferSuccess = () => {
  const loggedContext = useContext(LoggedContext);
  return (
    <>
      <h1>Transfer Summary</h1>
      <TransferSuccessBox {...loggedContext} />
    </>
  );
};

export default TransferSuccess;
