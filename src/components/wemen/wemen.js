import React from 'react';
import './wemen.css';

import shoe15 from '../assets/shoe 15.png';
import shoe16 from '../assets/shoe 16.png';
import shoe17 from '../assets/shoe 17.png';
import shoe18 from '../assets/shoe 18.png';
import shoe19 from '../assets/shoe 19.png';
import shoe20 from '../assets/shoe 20.png';

const Wemen = () => {
  return (
    <div id="wemen">
      <h1>Women</h1>

      <div>
      <header>
        <div>
          <h1>Women Collections!</h1>
          <h2> "Elevate Every Step: <br/>  Where Comfort Meets Style for Every Woman"</h2>
        </div>
      </header>
      <div className="images1">
            <img src={shoe15} className='one'></img>
            <img src={shoe16} className='two'></img>
            <img src={shoe17} className='three'></img>
            </div>
            <img src={shoe18} className='one'></img>
            <img src={shoe19}className='two'></img>
            <img src={shoe20}className='three'></img> 
    </div>
    </div>
    

    
  );
};

export default Wemen;
