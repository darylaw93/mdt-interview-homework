import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const LandingPage = () => {
  const [userWrong, setUserWrong] = useState(false);
  const history = useHistory();

  const HandleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value.toLowerCase();
    const password = event.target.elements.password.value;

    axios
      .post('/authenticate/login', {
        username: username,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem('access_token', res.data.token);
          localStorage.setItem('username', username);
          history.push('/account');
        }
      })
      .catch((err) => {
        console.log(err);
        setUserWrong(true);
      });
  };
  return (
    <>
      <div className="SignInForm">
        <h2>OCBC Banking App</h2>
        <br />
        <form onSubmit={HandleSubmit}>
          <div className="user-box">
            <input type="text" name="username" autoComplete="off" required />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" required />
            <label>Password</label>
          </div>
          <button className="btstyle">Login</button>
        </form>{' '}
        {userWrong && (
          <h5 style={{ color: '#ECF0F1' }}>
            Incorrect Username and/or Password
          </h5>
        )}
      </div>
    </>
  );
};

export default LandingPage;
