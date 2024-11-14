import React from 'react';
import { useNavigate } from 'react-router-dom';

import { PopForm } from '../popform';

import "./petinfo.css";

function PetInfo(props) {
    const [isFormOpen, setIsFormOpen] = React.useState(false);
    const navigate = useNavigate();
    const closeForm = () => {
        setIsFormOpen(false);
        props.onClick();
        navigate("/");
      };

    return (
            <div className="petinfo-form-overlay">
                <div className="petinfo-form-content">
                    <button className="petinfo-close-button" onClick={props.onClick}>&times;</button>
                    {/* Image on the left */}

                    {/* normal pop up form stuff on right, need to change input to just <p>? */}

                    <div className='petinfo-container'>
                        <img src={props.imgPath} alt={props.pet.name} id={props.pet.name} className='petinfo-image'/>
                        <div className='petinfo-info'>
                            <h1>Name:</h1>
                            <p>{props.pet.name}</p>

                            <h1>Species:</h1>
                            <p>{props.pet.species}</p>

                            <h1>Description:</h1>
                            <p>{props.pet.description}</p>

                            <button className='popup-form-button' type="submit" onClick={() => {setIsFormOpen(true)}} >Adopt</button>
                        </div>
                    </div>
                    <PopForm formType="Adopt" pet={props.pet} isOpen={isFormOpen} onClose={closeForm} fields={"name contact email"}/>

                </div>
            </div> 
    );
}


export {PetInfo};