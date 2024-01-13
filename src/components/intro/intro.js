import React from 'react';
import './intro.css';

const Intro = () => {
  return (
    <div>
      <video width="100%" height="auto" controls autoPlay muted loop>
        <source src={process.env.PUBLIC_URL + '/components/assets/Nike Video.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Intro;
