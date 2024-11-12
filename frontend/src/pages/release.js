import React, {useState} from 'react';

import { HeaderBar } from '../components/header';
import { PopForm } from '../components/popform';
import "../css/support.css";

// Taking everything from support because its the same
function Release() {
  let background = require("../assets/" + "release.png");

  // Add this for pop up forms, cant make classes
  const [isFormOpen, setIsFormOpen] = useState(false);
  const closeForm = () => {
    setIsFormOpen(false);
  };
  
    return (
      <div>
        <HeaderBar logo="logo.png" logo2="logo2.png"/>
        <div className="home" style={{ backgroundImage: `url(${background})` }}>
          <div className="support-content" style={{top: '60%'}}>
            <h1 className='title'>Rehome</h1>
            <p className='description'>We know that rehoming a pet can be an emotional and tough decision, but rest assured, your pet will be treated with love and respect until they find their forever home.</p>

            <button onClick={() => setIsFormOpen(true)}>Pet info</button>
          </div>
        </div>
        <PopForm isOpen={isFormOpen} onClose={closeForm} fields="petname pettype description"/>
      </div>
    );
  }
  
  export default Release;