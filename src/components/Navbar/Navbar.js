import React, { useState } from 'react';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri'; 

import './Navbar.css';
import logo from '../assets/Nike-Logo.png';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);


  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="Nike Logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#news">New</a></p>
          <p><a href="#men">Men</a></p>
          <p><a href="#wemen">Women</a></p>
          <p><a href="#kids">Kids</a></p>
          <p><a href="#contact">Contact Us</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p><a href="#news">New</a></p>
              <p><a href="#men">Men</a></p>
              <p><a href="#wemen">Women</a></p>
              <p><a href="#kids">Kids</a></p>
              <p><a href="#contact">Contact</a></p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
      
      
    </div>
  );
}

export default Navbar;
