import { useState, useEffect } from 'react';
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import {Link as ScrollLink} from 'react-scroll';
import { Link } from 'react-router-dom'


const Navbar = () => {

  const [sticky, setSticky] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', ()=>{
        window.scrollY > 500 ? setSticky(true) : setSticky(false);
      })
    },[]);

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = ()=>{
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo'/>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><ScrollLink ink to='hero' smooth={true} offset={0} duration={500}>HOME</ScrollLink></li>
        <li><ScrollLink to='programs' smooth={true} offset={-260} duration={500}>PROGRAM</ScrollLink></li>
        <li><ScrollLink to='about' smooth={true} offset={-150} duration={500}>ABOUT US</ScrollLink></li>
        <li><ScrollLink to='campus' smooth={true} offset={-260} duration={500}>CAMPUS</ScrollLink></li>
        <li><ScrollLink to='feedback' smooth={true} offset={-150} duration={500}>FEED BACK</ScrollLink></li>
        <li><ScrollLink to='contact' smooth={true} offset={-150} duration={500}>CONTACT US</ScrollLink></li>
        <li>
          <Link to='/login' className='btn'>Log in</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu_icon' onClick={toggleMenu}/>
    </nav>
  );
};

export default Navbar;