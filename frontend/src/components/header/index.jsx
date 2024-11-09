import React from 'react';
import HeaderButton from './headerbutton.jsx';

const Header = (props) => {
    return(
        <header>
            <HeaderButton {...props}/>
        </header>
    );
}

export default Header;