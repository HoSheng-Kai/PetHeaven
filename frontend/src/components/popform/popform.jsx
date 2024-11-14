import React, { useState, useEffect } from 'react';
import './popform.css';
import {validateCreditCard, validateAmount, validateEmail, validateContact} from './inputchecks';

function PopForm(props) {
    const fieldArray = props.fields.split(" ");
    // Sends the email to hoshengkai1308@gmail.com
    const ACCESS_KEY = "bfbe91ce-6eec-4398-bcbe-626405a97db4"

    const [formData, setFormData] = useState({
        name: '',
        creditcard: '',
        amount: '',
        email: '',
        contact: '',
        petname: '',
        pettype: 'Dog', // cause my default is dog
        description: '',
        password: '',
    });

    const handleChange = (e) => {
        const { id, value } = e.target;

        setFormData((previousFormData) => ({
          ...previousFormData,
          [id]: value,
        }));
        // console.log(id + " have a value of: " + value);
      };

    // makes background unclickable + darkened
    useEffect(() => {
        if (props.isOpen) {
          document.body.classList.add('modal-open');
        } else {
          document.body.classList.remove('modal-open');
        }
    
        return () => {
          document.body.classList.remove('modal-open');
        };
      }, [props.isOpen]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Without this i cant log session storage, and when i do, this doesnt appear
 
        const emailForm = new FormData(e.target);
        emailForm.append("access_key", ACCESS_KEY);
        emailForm.append("Form type:", props.formType);

        // Remmeber to add form type
        fieldArray.forEach(element => {
            emailForm.append(element, formData[element]);
        });

        if(props.pet){
            // Submit email with pet to adopt
            // Set availability to FALSE
            emailForm.append("petname", props.pet["name"]);
            emailForm.append("species", props.pet["species"]);
            emailForm.append("description", props.pet["description"]);
            
            // Changing availability
            const petStorage = JSON.parse(localStorage.getItem('pets'));

            petStorage.forEach(pet => {
                if (pet.name == props.pet.name)
                {
                    pet.availability = false;
                }
            });

            // Set it back
            localStorage.setItem('pets', JSON.stringify(petStorage));
        }  

        // Skip api call if there is password as it is user signing in
        if(fieldArray.includes("password")){
            alert("You have signed in.")
        }
        else{
            // removing await cause it is fking with my order
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: emailForm
              });
    
            alert("We have received your information.");
        }

        // This closes the page
        // Jesus fk this actually saved it
        props.onClose();
    };

    if (!props.isOpen) {
        return null;
    }
    else{
        return (
            <div className="popup-form-overlay">

                <div className="popup-form-content">
                    <button className="close-button" onClick={props.onClose}>&times;</button>
                    <form className="popup-form" onSubmit={handleSubmit}>
                    {fieldArray.map((field, index) => {
                                if (field === "name") {
                                return (
                                    <div key={index}>
                                        <label className="popup-form-label" htmlFor="name">Name:</label>
                                        <input className="popup-form-input" id='name' value={formData.name} onChange={handleChange} required /><br /><br />
                                    </div>
                                );
                                } else if (field === "creditcard") {
                                return (
                                    <div key={index}>
                                        <label className="popup-form-label" htmlFor="creditcard">Credit card:</label>
                                        <input className="popup-form-input" id='creditcard' type="text" pattern="\d*" value={formData.creditcard} onChange={handleChange} onInput={validateCreditCard} required /><br /><br />
                                    </div>
                                );
                                } else if (field === "amount") {
                                return (
                                    <div key={index}>
                                        <label className="popup-form-label" htmlFor="amount">Amount (SGD)</label>
                                        <input className="popup-form-input" id='amount' type="text" pattern="^\d*\.?\d+$" value={formData.amount} onChange={handleChange} onInput={validateAmount} required /><br /><br />
                                    </div>
                                );
                                }
                                else if (field === "email") {
                                    return (
                                        <div key={index}>
                                            <label className="popup-form-label" htmlFor="email">Email:</label>
                                            <input className="popup-form-input" id='email' type="text" pattern=".*@.*" value={formData.email} onChange={handleChange} onInput={validateEmail} required /><br /><br />
                                        </div>
                                    );
                                }
                                else if (field === "contact") {
                                    return (
                                        <div key={index}>
                                            <label className="popup-form-label" htmlFor="contact">Contact:</label>
                                            <input className="popup-form-input" id='contact' type="text" pattern="^\d*" value={formData.contact} onChange={handleChange} onInput={validateContact} required /><br /><br />
                                        </div>
                                    );
                                }
                                else if (field === "petname") {
                                    return (
                                        <div key={index}>
                                            <label className="popup-form-label" htmlFor="petname">Pet name:</label>
                                            <input className="popup-form-input" id='petname' value={formData.petname} onChange={handleChange} required /><br /><br />
                                        </div>
                                    );
                                }
                                else if (field === "pettype") {
                                    return (
                                        <div key={index}>
                                            <label className="popup-form-label" htmlFor="pettype">Pet Type:</label>
                                            <select className="popup-form-input" id='pettype' value={formData.pettype} onChange={handleChange} required>
                                                <option value="dog">Dog</option>
                                                <option value="cat">Cat</option>
                                                <option value="bird">Bird</option>
                                            </select><br /><br />
                                        </div>
                                    );
                                }
                                else if (field === "description") {
                                    return (
                                        <div key={index}>
                                            <label className="popup-form-label" htmlFor="description">Description:</label>
                                            <textarea className="popup-form-input" type="textarea" id='description' rows={5} cols={40} value={formData.description} onChange={handleChange}/><br /><br />
                                        </div>
                                    );
                                }
                                else if (field === "password") {
                                    return (
                                        <div key={index}>
                                            <label className="popup-form-label" htmlFor="password">Password:</label>
                                            <input className="popup-form-input" type="password" id='password' required /><br /><br />
                                        </div>
                                    );
                                }
                                return null;
                            })}

                    <button className='popup-form-button' type="submit">Submit</button>
                    </form>
                </div>
            </div>
        );
    }

}

export default PopForm;