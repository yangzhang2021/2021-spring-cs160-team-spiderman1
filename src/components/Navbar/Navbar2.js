import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar2() {
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
            <NavLink activeStyle={{ color:"#b4ccbc"}} exact to='/discover' className='nav-links'  onClick={closeMobileMenu}> iBlog</NavLink>
            </li>
            <li className='nav-item'>
            <NavLink activeStyle={{ color:"#b4ccbc"}} exact to='/discoverlist' className='nav-links' onClick={closeMobileMenu}> iList</NavLink>
            </li>
            <li className='nav-item'>
            <NavLink  exact to='/' className='nav-links' onClick={closeMobileMenu}>Home</NavLink>
            </li>
            <li className='nav-item'>
            <NavLink activeStyle={{ color:"#b4ccbc"}} exact to='/about' className='nav-links' onClick={closeMobileMenu}>About</NavLink>
            </li>
            <li className='nav-item'>
            <NavLink activeStyle={{ color:"#b4ccbc"}} exact to='/signin' className='nav-links' onClick={closeMobileMenu}> Sign In</NavLink>
            </li>
            <li className='nav-item'>
            <NavLink activeStyle={{ color:"#b4ccbc"}} exact to='/signup' className='nav-links' onClick={closeMobileMenu}> Sign Up</NavLink>
            </li>
            
        </ul>
        </div>
    </nav>
    </>
  );
}

export default Navbar2;