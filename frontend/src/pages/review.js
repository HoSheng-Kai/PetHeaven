import React from 'react';

import { HeaderBar } from '../components/header';

import "../css/review.css";

function Review() {
  let path1 = require("../assets/dog/1.jpg");
  let path2 = require("../assets/cat/4.jpg");
  return (
    <div>
      <HeaderBar logo="logo.png" logo2="logo2.png"/>
      <div className='review-content'>
        <div className='review'>
          <img src={path1} alt="Dog" />
          <p>"Best place I have been to!"</p>
        </div>

        <div className='review'>
          <img src={path2} alt="Cat" />
          <p>"Not enough food."</p>
        </div>
      </div>
    </div>
  );
}
  
  export default Review;