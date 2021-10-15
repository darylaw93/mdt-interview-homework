import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Transfer = () => {
  const [recipient, setRecipient] = useState([]);
  const [recipientList, setRecipientList] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParam] = useState(['accountHolderName']);
  let arr = [];

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

  const list = search(recipient).map((data, index) => {
    return (
      <div key={index} className="payeeBox">
        <div style={{ fontSize: '16px' }}>{data.accountHolderName}</div>
        <br />
        <div style={{ fontSize: '12px', marginTop: '15px' }}>
          {data.accountNo}
        </div>
      </div>
    );
  });

  const handleQuery = (event) => {
    let string = event.currentTarget.value;
    console.log(string);
  };
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
      <h1>Transfer Page</h1>
      <Link to="/account">ᑉ</Link>
      <form>
        <div>
          <input
            type="search"
            name="search-form"
            placeholder="Search for..."
            onKeyUp={(e) => setQuery(e.target.value)}
          ></input>
        </div>
      </form>
      {list}
    </div>
  );
};

export default Transfer;
