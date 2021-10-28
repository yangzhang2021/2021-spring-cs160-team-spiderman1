import React from 'react';
import '../../App.css';
import './HeroSection.css';
import {Link} from 'react-router-dom'
import list from '../../img/list.jpg'

function HeroSection() {
  return (
    <>
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

      <div className='section1-container'>
        <div className='section1-left'>
          <h1>One stop to build your
          on going porfolio</h1>
        </div>
        <div className='create-btn'>
          <Link className='create-link' to='/signin'>
            Create porfolio
          </Link>
        </div>
        <div className='section1-right'>
          <h1>One-stop to find talents</h1>
        </div>
        <div className='create-btn'>
          <Link className='create-link' to='/signin'>
            Find talents
          </Link>
        </div>
      </div>

      <div className='section2-container'>
        <div className='section2'>
          <h1>iBlog</h1>
          <h3>Your porfolio will shine here</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
          <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
          <Link className='learn-link' to='/signin'>
            Learn more
          </Link>
         </div>
      </div>

      <div className='section3-container'>
        <div className='section3'>
          <h1>iList</h1>
          <h3>Ready to List your project for sale</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
          <Link className='learn-link' to='/signin'>
            Learn more
          </Link>
        </div>
        <div className='list_img'>
          <img src={list} alt="list"/>
        </div>
      </div>

      <div className="footer-container">
        <div className='footer'>
          <div className='row'>
            <div className='col'>
              <h3>About</h3>
              <ul className="list">
                <li><Link className='footlink' to='/'>Mission</Link></li>
              </ul>
            </div>
            <div className='col'>
              <h3>Services</h3>
              <ul className="list">
                <li><Link className='footlink' to='/'>iBlog</Link></li>
                <li><Link className='footlink' to='/'>iList</Link></li>
              </ul>
            </div>
            <div className='col'>
              <h3>Contact</h3>
              <ul className="list">
                <li><Link className='footlink' to='/'>Email</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default HeroSection;