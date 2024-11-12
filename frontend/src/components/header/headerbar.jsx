import React from 'react';
import { useNavigate } from 'react-router-dom';
// import Home from './pages/home.js';

import './headerbar.css';

import HeaderButton from './headerbutton.jsx';
function HeaderBar(props) {
    let logo = require("../../assets/logo/" + props.logo);
    let logo2 = require("../../assets/logo/" + props.logo2);

    const navigate = useNavigate();

    const handleClick = (path) => {
      navigate(path);
    };

    return (
        // <div>
          <div className='flex-container'>
            <div className='flex-item-left' onClick={() => handleClick("/")} style={{ cursor: 'pointer' }}>
                <img src={logo} alt='logo' className='logo'/>
                <img src={logo2} alt='logo2' className='logo2'/>
            </div>
  
              {/* Also highlight which page it is on, maybe through props? */}
              <nav className='flex-item-right'>
                <HeaderButton variant='nav-item' text='Adopt'/>
                {/* <HeaderButton variant='nav-item' text='Adopt' onclick={() => handleClick()} path='/adopt'/> */}
                <HeaderButton variant='nav-item' text='Release' onClick={() => handleClick('/release')}/>
                <HeaderButton variant='nav-item' text='Member' onClick={() => handleClick('/member')}/>
                <HeaderButton variant='nav-item' text='Support us' onClick={() => handleClick('/support')} />
              </nav>
          </div>
  
        // </div>
      );
}


export default HeaderBar;