import React from 'react';

const landingpage = () => {
  return (
    <>
      <h1>Login!</h1>
      <div className="SignInForm">
        <form>
          <div className="user-box">
            <input type="text" name="username" required />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" required />
            <label>Password</label>
          </div>
          <button className="btstyle">Login</button>
        </form>
      </div>
    </>
  );
};

export default landingpage;
