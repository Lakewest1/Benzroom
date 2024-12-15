// Navbar.js
import React, { useState } from 'react';
import logo3 from '../../../assets/logo2.jpg';
import './Navbar.css';

const Navbar = () => {
  const openNav = () => {
    document.getElementById('myNav').style.width = '200%';
  };

  const closeNav = () => {
    document.getElementById('myNav').style.width = '0%';
  };

  return (
    <div className="navbar" id='navbar'>
      <div className="logo">
        <img src={logo3} alt="logo" />
        <br />
        <a>Mercedes Benz</a>
      </div>
      
      <div className="nav-list" id="myNav">
         
        <ul className='List'>
          <a href="#" onClick={closeNav}>
            <i className="fa fa-times" />
          </a>
          <a onClick={closeNav} href="#Home" className='Ant'>Home</a>
          <a onClick={closeNav} href="#Latest" className='Ant'>Latest</a>
          <a onClick={closeNav} href="#Drive" className='Ant'>About</a>
          <a onClick={closeNav} href="#Gallery" className='Ant'>Gallery</a>
          <a onClick={closeNav} href="#Footer" className='Ant'>Contact</a>
        </ul>
      </div>
      <a href="#" onClick={openNav}>
        <span><i className="fa fa-bars" /></span>
      </a>
  
    </div>
  );
};

export default Navbar;


