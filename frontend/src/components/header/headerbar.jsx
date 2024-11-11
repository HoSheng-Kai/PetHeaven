import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/home.js';

import './headerbar.css';

import HeaderButton from './headerbutton.jsx';
function HeaderBar(props) {
    let logo = require("../../assets/logo/" + props.logo);
    let logo2 = require("../../assets/logo/" + props.logo2);

    return (
        // <div>
          <div className='flex-container'>
            <div className='flex-item-left'>
              {/* This is for later, to redirect to home page. also make it a pointer on hover*/}
              <a>
                <img src={logo} alt='logo' className='logo'/>
                <img src={logo2} alt='logo2' className='logo2'/>
              </a>
            </div>
  
              {/* This should redirect appropriately as well */}
              <nav className='flex-item-right'>
                <HeaderButton variant='nav-item' text='Adopt'/>
                <HeaderButton variant='nav-item' text='Release'/>
                <HeaderButton variant='nav-item' text='Member'/>
                <HeaderButton variant='nav-item' text='Support us'/>
              </nav>
          </div>
  
        // </div>
      );
}


export default HeaderBar;