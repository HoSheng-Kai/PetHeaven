import React from 'react';

import { HeaderBar } from '../components/header';
import { ParallaxPage } from '../components/parallax';
function Home() {
    return (
      <div>
        <HeaderBar logo="logo.png" logo2="logo2.png"/>
        <ParallaxPage background= "home.png"/>
      </div>
    );
  }
  
  export default Home;