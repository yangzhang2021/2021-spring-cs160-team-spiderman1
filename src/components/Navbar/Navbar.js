import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
    <nav className='navbar active'>
        <div className='navbar-container container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Intangible
        </Link>
        <div className='menu-icon' onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
            <NavLink activeStyle={{ color:"#0077b6"}} exact to='/' className='nav-links'  onClick={closeMobileMenu}> Products</NavLink>
            </li>
            <li className='nav-item'>
            <NavLink activeStyle={{ color:"#0077b6"}} exact to='/signin' className='nav-links' onClick={closeMobileMenu}> Sign In</NavLink>
            </li>
            <li className='nav-item'>
            <NavLink activeStyle={{ color:"#0077b6"}} exact to='/signup' className='nav-links' onClick={closeMobileMenu}> Sign Up</NavLink>
            </li>
            
        </ul>
        </div>
    </nav>
    </>
  );
}

export default Navbar;