import { Fragment } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
