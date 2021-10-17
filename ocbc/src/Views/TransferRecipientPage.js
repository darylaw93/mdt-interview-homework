import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { LoggedContext } from '../App';
import axios from 'axios';
import PayeeBox from '../components/TransferRecipientPageComponents/PayeeBox';

const Transfer = () => {
  const loggedContext = useContext(LoggedContext);
  const [recipient, setRecipient] = useState([]);
  const [query, setQuery] = useState('');

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
      <PayeeBox
        setCustomerInfo={loggedContext.setCustomerInfo}
        recipient={recipient}
        query={query}
      />
    </div>
  );
};

export default Transfer;
