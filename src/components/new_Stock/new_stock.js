import React from 'react';
import './new_stock.css'; // Assuming 'new_stock.css' is in the same directory as this component
import shoe1 from '../assets/shoe 4.jpg';
import shoe2 from '../assets/shoe 2.jpg';
import shoe3 from '../assets/shoe 3.jpg';

const NewStock = () => {
  return (
    <div id="news">
      <h1>THIS SEASON'S FRESH FITS</h1>
      <br />
      <br />

      <p>
        Unleash the future with our innovative creation – where quality meets
        excitement, and every purchase is a step into a world of unparalleled
        experiences!
      </p>
      {/* Uncomment the following line if you want to use shoe1 */}
      {/* <img src={shoe1} alt="Shoe 1" className='shoe1' /> */}
      <img src={shoe2} alt="Shoe 2" className='shoe2' />
      <img src={shoe3} alt="Shoe 3" className='shoe3' />
      <br />
      <br />

      {/* button */}

      <div className="buttonHolder">
        <a href="#" className="button tick"></a>
        <a href="#" className="button cross"></a>
        <a href="#" className="button heart"></a>
        <a href="#" className="button flower"></a>
      </div>
    </div>
  );
};

export default NewStock;
