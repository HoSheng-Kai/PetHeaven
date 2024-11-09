import React from 'react';


function HeaderButton(props) {
    return (
        <button className={props.variant}>{props.text}</button>
    );
}

export default HeaderButton;