import React from 'react';
import '../../App.css';
import './HeroSection.css';
import {Link} from 'react-router-dom'

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='headline'>
        <h1>Begin your</h1>
        <h1>next Adventure</h1> 
        <h1>with us</h1>
      </div>
      <div className='hero-btn'>
        <Link className='hero-link' to='/signup'>
            Begins here
          </Link>
      </div>
    </div>
  );
}

export default HeroSection;