import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.title}>Daily NOTES</h1>
      <img src={logo} className={styles.logo} alt='logo' />
      <button className={styles.btn}>
        <NavLink to='/notes'>Create your note</NavLink>
      </button>
    </nav>
  );
};

export default Navbar;
