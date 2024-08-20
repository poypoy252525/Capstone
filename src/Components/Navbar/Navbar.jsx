import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt="" className='logo'/>
      <ul>
        <li>HOME</li>
        <li>PROGRAM</li>
        <li>ABOUT US</li>
        <li>CAMPUS</li>
        <li>FEED BACK</li>
        <li><button className='btn'>Log in</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;