import React from 'react';

import '../css/home.css';

import HeaderButton from '../components/header';

function Home() {
    return (
      // I think this header should be a component, not a page? Change location to header bar
      <div>
        <div className='flex-container'>
          <div className='flex-item-left'>
            {/* This is for later, to redirect to home page */}
            <a>
              <img src={require("../assets/logo.png")} alt='logo' className='logo'/>
              <img src={require("../assets/logo2.png")} alt='logo2' className='logo2'/>
            </a>
          </div>

            <nav className='flex-item-right'>
              <HeaderButton variant='nav-item' text='Adopt'/>
              <HeaderButton variant='nav-item' text='Release'/>
              <HeaderButton variant='nav-item' text='Member'/>
              <HeaderButton variant='nav-item' text='Support us'/>
            </nav>
        </div>

        <div>

        </div>
      </div>
    );
  }
  
  export default Home;