import React, {useState} from 'react';

import { HeaderBar } from '../components/header';
import { PopForm } from '../components/popform';
import "../css/support.css";

// Taking everything from support because its the same
function Member() {
  let background = require("../assets/" + "member.png");

  // Add this for pop up forms, cant make classes
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formFields, setFormFields] = useState("");

  const closeForm = () => {
    setIsFormOpen(false);
  };
  
    return (
      <div>
        <HeaderBar logo="logo.png" logo2="logo2.png"/>
        <div className="home" style={{ backgroundImage: `url(${background})` }}>
          <div className="support-content" style={{left: '75%'}}>
            <h1 className='title'>Membership</h1>
            <p className='description'>Join Pet Heaven as a volunteer and help change the lives of pets waiting for loving homes. As a member, you’ll connect with animals, work alongside fellow pet lovers, and gain the joy of giving back. Make a real difference—join us today and be part of our mission to find every pet a forever home!</p>

            <h1 className='title'>Benefits</h1>
            <ul>
              <li>Exclusive Training</li>
              <li>Volunteer Recognition Program</li>
              <li>Adoption Priority</li>
            </ul>

            <div className='subdiv'>
            <button onClick={() => {setIsFormOpen(true); setFormFields("name contact email")}}>Join Today!</button>
            <sub class="subtext" onClick={() => {setIsFormOpen(true); setFormFields("name password")}}>Already have an account? Log in</sub>
            </div>
            
          </div>
        </div>
        <PopForm formType="Member" isOpen={isFormOpen} onClose={closeForm} fields={formFields}/>

      </div>
    );
  }
  
  export default Member;