import React, { useContext, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { LoggedContext } from '../App';
import axios from 'axios';

const Transfer = (props) => {
  const loggedContext = useContext(LoggedContext);
  const [recipient, setRecipient] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParam] = useState(['accountHolderName']);
  const history = useHistory();
  useEffect(() => {
    axios
      .get('http://localhost:8080/account/payees', {
        headers: {
          'content-type': 'application/json',
          Accept: 'application/json',
          authorization: localStorage.getItem('access_token'),
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setRecipient(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    loggedContext.setCustomerInfo({
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
  return (
    <div>
      <div
        style={{
          float: 'left',
          margin: '5px',
          fontSize: '20px',
          cursor: 'pointer',
        }}
        onClick={() => {
          history.push('/account');
        }}
      >
        ❮ Back
      </div>
      <br />
      <h1>Select Recipient</h1>
      <div>
        <input
          type="search"
          name="search-form"
          className="searchForm"
          placeholder="Search for a name"
          onKeyUp={(e) => setQuery(e.target.value)}
        ></input>
      </div>
      {list}
    </div>
  );
};

export default Transfer;
