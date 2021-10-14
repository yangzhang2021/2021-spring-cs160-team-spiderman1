import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
 


  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Intangible
        </Link>
        <div className='menu-icon' onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
            </li>
            <li className='nav-item'>
            <Link to='/discover' className='nav-links'  onClick={closeMobileMenu}> Discover</Link>
            </li>
            <li className='nav-item'>
            <Link to='/about' className='nav-links' onClick={closeMobileMenu}> About</Link>
            </li>
            <li className='nav-item'>
            <Link to='/signin' className='nav-links' onClick={closeMobileMenu}> Sign In</Link>
            </li>
            <li className='nav-item'>
            <Link to='/signup' className='nav-links' onClick={closeMobileMenu}> Sign Up</Link>
            </li>
        </ul>
        </div>
    </nav>
    </>
  );
}

export default Navbar;