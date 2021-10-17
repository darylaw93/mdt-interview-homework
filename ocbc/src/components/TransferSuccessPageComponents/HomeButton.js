import React from 'react';
import { useHistory } from 'react-router';

const HomeButton = () => {
  const history = useHistory();
  return (
    <button className="homeButton" onClick={() => history.push('/account')}>
      Home
    </button>
  );
};

export default HomeButton;
