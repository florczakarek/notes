import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Fragment>
      <h1 className='centered'>Ooops! Page does not exist.</h1>
      <button className='btn-note'>
        <Link to='/notes'>Back Home</Link>
      </button>
    </Fragment>
  );
};

export default NotFound;
