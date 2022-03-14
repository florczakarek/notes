import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <Fragment>
      <div className={styles.error}>
        <lottie-player
          src='https://assets8.lottiefiles.com/packages/lf20_r71cen62.json'
          background='transparent'
          speed='1'
          loop
          autoplay
        ></lottie-player>
        <h1 className='centered'>Ooops! Page does not exist.</h1>
        <button className={styles['btn-error']}>
          <Link to='/notes'>Back Home</Link>
        </button>
      </div>
    </Fragment>
  );
};

export default NotFound;
