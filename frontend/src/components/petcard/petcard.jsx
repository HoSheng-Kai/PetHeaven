import React from 'react';

import "./petcard.css";

import { PetInfo } from './petinfo';

function PetCard(props) {
    
    let path = require("../../assets/" + props.pet.species + "/" + props.pet.picture +".jpg");
    const [isFormOpen, setIsFormOpen] = React.useState(false);

    return (
        // img with rounded borders
        <div style={{display: 'contents'}}>
            <div id={props.pet.name} className='card' onClick={() => setIsFormOpen(true)}>
                <img src={path} alt={props.pet.name} id={props.pet.name} className='pet-image'/>
            </div>

            {isFormOpen && <PetInfo pet={props.pet} imgPath={path} onClick={() => setIsFormOpen(false)} refresh={props.refresh}/>}
            {/* {isFormOpen && <PetInfo pet={props.pet} imgPath={path} onClick={() => setIsFormOpen(false)}/>} */}
        </div>

    );
}


export default PetCard;