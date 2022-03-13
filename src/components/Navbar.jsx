import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className='nav'>
      <img className='nav-logo' src={logo} alt='note logo' />
      <h2 className='nav-title'>Note App</h2>
    </nav>
  );
};

export default Navbar;
