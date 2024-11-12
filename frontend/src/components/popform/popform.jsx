import React, { useState } from 'react';
import './popform.css';
import {validateCreditCard, validateAmount, validateEmail, validateContact} from './inputchecks';

// Submit should have another window that shows information have been received
// Need to communicate with backend with submit button

function PopForm(props) {
    const fieldArray = props.fields.split(" ");

    const handleSubmit = (e) => {
        alert("Information submitted!");
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
                                        <input className="popup-form-input" id='name' required /><br /><br />
                                    </div>
                                );
                                } else if (field === "creditcard") {
                                return (
                                    <div key={index}>
                                        <label className="popup-form-label" htmlFor="creditcard">Credit card:</label>
                                        <input className="popup-form-input" id='creditcard' type="text" pattern="\d*" onInput={validateCreditCard} required /><br /><br />
                                    </div>
                                );
                                } else if (field === "amount") {
                                return (
                                    <div key={index}>
                                        <label className="popup-form-label" htmlFor="amount">Amount (SGD)</label>
                                        <input className="popup-form-input" id='amount' type="text" pattern="^\d*\.?\d+$" onInput={validateAmount} required /><br /><br />
                                    </div>
                                );
                                }
                                else if (field === "email") {
                                    return (
                                        <div key={index}>
                                            <label className="popup-form-label" htmlFor="email">Email:</label>
                                            <input className="popup-form-input" id='email' type="text" pattern=".*@.*" onInput={validateEmail} required /><br /><br />
                                        </div>
                                    );
                                }
                                else if (field === "contact") {
                                    return (
                                        <div key={index}>
                                            <label className="popup-form-label" htmlFor="contact">Contact:</label>
                                            <input className="popup-form-input" id='contact' type="text" pattern="^\d*" onInput={validateContact} required /><br /><br />
                                        </div>
                                    );
                                }
                                else if (field === "petname") {
                                    return (
                                        <div key={index}>
                                            <label className="popup-form-label" htmlFor="petname">Pet name:</label>
                                            <input className="popup-form-input" id='petname'required /><br /><br />
                                        </div>
                                    );
                                }
                                else if (field === "pettype") {
                                    return (
                                        <div key={index}>
                                            <label className="popup-form-label" htmlFor="pettype">Pet Type:</label>
                                            <select className="popup-form-input" id='pettype' required>
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
                                            <textarea className="popup-form-input" type="textarea" id='description' rows={5} cols={40} /><br /><br />
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