import React from 'react';

function HeaderButton(props) {
    return (
        <button className={props.variant} onClick={props.onClick}>{props.text}</button>
    );
}

export default HeaderButton;