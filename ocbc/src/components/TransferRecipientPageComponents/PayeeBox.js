import React, { useState } from 'react';
import { useHistory } from 'react-router';
const PayeeBox = ({ setCustomerInfo, recipient, query }) => {
  const history = useHistory();
  const [searchParam] = useState(['accountHolderName']);

  const handleClick = (event) => {
    event.preventDefault();
    setCustomerInfo({
      customerName: `${event.currentTarget.childNodes[0].innerText}`,
      customerAccountNo: `${event.currentTarget.childNodes[2].innerText}`,
    });
    history.push('confirmation');
  };

  const list = search(recipient).map((data, index) => {
    return (
      <div key={index} className="payeeBox" onClick={handleClick}>
        <div style={{ fontSize: '16px' }}>{data.accountHolderName}</div>
        <br />
        <div style={{ fontSize: '12px', marginTop: '15px' }}>
          {data.accountNo}
        </div>
      </div>
    );
  });

  function search(items) {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(query.toLowerCase()) >
          -1
        );
      });
    });
  }
  return <div className="payeeList">{list}</div>;
};

export default PayeeBox;
