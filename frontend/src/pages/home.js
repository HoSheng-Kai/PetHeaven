import React from 'react';

import { HeaderBar } from '../components/header';

import "../css/home.css";
function Home() {
  let background = require("../assets/" + "home.png");
    return (
      <div>
        <HeaderBar logo="logo.png" logo2="logo2.png"/>

        <div className="home-content">
        <div className="home" style={{ backgroundImage: `url(${background})` }}>
            <div class="content">
            <span><h1>Purpose</h1></span>
            <span><p>Our mission is to provide a loving and safe environment for abandoned and neglected animals, offering them the care and attention they deserve. We strive to rescue, rehabilitate, and rehome animals, ensuring they have a chance at a better life. Through community outreach, we aim to raise awareness about animal welfare and promote responsible pet ownership. </p></span>
            <span><h1>Facilities</h1></span>
            <span>
            <ul>
                <li>Comfortable living spaces for dogs, birds and cats.</li>
                <li>On-site veterinary care and treatments.</li>
                <li>24/7 care and socialization by staff and volunteers.</li>
                <li>Adoption center to help animals find loving homes.</li>
            </ul>
            </span>
            </div>

        </div>
      </div>
      </div>
    );
  }
  
  export default Home;