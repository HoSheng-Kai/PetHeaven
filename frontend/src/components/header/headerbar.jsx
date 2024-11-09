import React from 'react';


function HeaderBar(props) {
    return (
        <button className={props.variant}>{props.text}</button>
    );
}


export default HeaderBar;