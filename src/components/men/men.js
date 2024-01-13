import React from 'react';
import './men.css';
import shoe6 from '../assets/shoe 6.png';
import shoe7 from '../assets/shoe 7.png';
import shoe8 from '../assets/shoe 8.png';
import shoe9 from '../assets/shoe 9.png';
import shoe10 from '../assets/shoe 10.png';
import shoe11 from '../assets/shoe 11.png';

const men = () => {
  return (
    <div id="men">
        
        <center>
       <h1 className='heads'>Men</h1> 
       </center>
        <div className="images1">
            <img src={shoe6} className='one'></img>
            <img src={shoe7} className='two'></img>
            <img src={shoe8} className='three'></img>
            </div>
            <img src={shoe9} className='one'></img>
            <img src={shoe10}className='two'></img>
            <img src={shoe11}className='three'></img> 
    </div>
  );
}

export default men;
