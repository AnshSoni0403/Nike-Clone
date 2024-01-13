import React from 'react';
import './contact.css';

import logo2 from '../assets/logo 2.png';
import fb from '../assets/fb.png';
import tweet from '../assets/tweet.png';
import insta from '../assets/insta.png';

const Contact = () => {
  return (
    <div id="contact">
      <div className="gpt3__footer-heading">
        <h1>Connect with us!</h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>www.nike.com</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={logo2} alt="logo"></img>
          <p>Cross Street,New Year,USA <br /> All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Cross Street,New Year,USA</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
      </div>

      <div className="gpt3__footer-copyright">
      <p>@2024 Nike. All rights reserved.</p>
    </div>

    <div class="field">
	<a class="sns-btn sns-btn--twitter">
		<img src={fb} className='sns-btn sns-btn--facebook'></img>
	</a>	
	<a class="sns-btn sns-btn--facebook">
		<img src={tweet}  className='sns-btn sns-btn--facebook'></img>
	</a>
	<a class="sns-btn sns-btn--instagram">
    <img src={insta}  className='sns-btn sns-btn--facebook'></img>
	</a>
</div>
    </div>
  );
}

export default Contact;
