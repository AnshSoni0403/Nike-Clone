import React from 'react';
import './kids.css';
import bacha from '../assets/kids.webp';

import shoe21 from '../assets/shoe 21.png';
import shoe22 from '../assets/shoe 22.png';
import shoe23 from '../assets/shoe 23.png';
import shoe24 from '../assets/shoe 24.png';
import shoe25 from '../assets/shoe 25.png';
import shoe26 from '../assets/shoe 26.png';
const kids = () => {
  return (
    <div id='kids'>
        <h1>KIDS</h1>
        <img src={bacha} className='bachaa'></img>

        <div className="images1">
            <img src={shoe21} className='one'></img>
            <img src={shoe22} className='two'></img>
            <img src={shoe23} className='three'></img>
            </div>
            <img src={shoe24} className='one'></img>
            <img src={shoe25}className='two'></img>
            <img src={shoe26}className='three'></img> 
    </div>
      
    
  );
}

export default kids;
