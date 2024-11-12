import React, {useState} from 'react';

import { HeaderBar } from '../components/header';
import { PopForm } from '../components/popform';
import "../css/support.css";

function Support() {
  let background = require("../assets/" + "support.jpg");

  // Add this for pop up forms, cant make classes
  const [isFormOpen, setIsFormOpen] = useState(false);
  const closeForm = () => {
    setIsFormOpen(false);
  };
  
    return (
      <div>
        <HeaderBar logo="logo.png" logo2="logo2.png"/>
        <div className="home" style={{ backgroundImage: `url(${background})` }}>
          <div className="support-content">
            <h1 className='title'>Donate</h1>
            <p className='description'>As a non-profit society, Pet Heaven relies solely on the generosity of the public to help fund our rescue, rehabilitation and rehoming acitivities. We receive no government or corporate funding. Being mainly volunteer run, we aim to channel most of the resources to assist the animals we are responsible for.</p>

            <h1 className='title'>Expenses</h1>
            <ul>
              <li>Medical aid for pets</li>
              <li>Upkeep of the Pet Heaven kennel eg. utilities and food</li>
              <li>Employees salary</li>
            </ul>

            <button onClick={() => setIsFormOpen(true)}>Donate</button>
          </div>
        </div>
        <PopForm isOpen={isFormOpen} onClose={closeForm} fields="name creditcard amount"/>
      </div>
    );
  }
  
  export default Support;