import React, {useState, useEffect} from 'react';
import Select from 'react-select';

import { HeaderBar } from '../components/header';
import { PetCard } from '../components/petcard';

import "../css/adopt.css";


function Adopt() {
    // // Setting up data
    // const petStorage = localStorage.getItem('pets');
    // const pets = JSON.parse(petStorage);
    const [cards, pushCards] = useState([]);

    // Choose which picture to render + setup regarding
    let petCount = {
        cat: 1,
        dog: 1,
        bird: 1,
      };

    const [req, setReq] = React.useState('all');

    const [options, setOptions] = useState([
      { value: 'all', label: 'All', count: 0},
      { value: 'bird', label: 'Bird', count: 0},
      { value: 'cat', label: 'Cat', count: 0},
      { value: 'dog', label: 'Dog', count: 0},
    ]);

    // Counts the number of each pet left after each change in req
    useEffect(() => {
      // Setting up data
      const petStorage = localStorage.getItem('pets');
      const pets = JSON.parse(petStorage);

      let tempOptions = [...options];

      tempOptions.forEach((option) => {
        option.count = 0;
      });

      pets.forEach((pet) => {
        if(pet.availability){
          tempOptions.forEach((option) => {
            if (option.value === pet.species) {
              option.count++;
            }
            
            // increment all no matter what
            if (option.value === 'all') {
              option.count++;
            }
          });
        }
      });

      setOptions(tempOptions);

      // I need the for loop here so that it actually changes
      pushCards([]);
      let temp = [];

      for(let it = 0, count=1; it < pets.length; it++) {
        if (pets[it].species == req || req == "all") {
          // If pet is available
          if (pets[it].availability) {
            // sending refresh through multiple layers just so it fking updates
            temp.push(<PetCard key={count} pet={pets[it]} count={petCount[pets[it].species]}/>);
            // move to next picture
            petCount[pets[it].species]++;
            // move to next key
            count++;
          }
        }
      }

      pushCards(temp);
    }, [req]);

    // REACT SELECT DROPDOWN RELATED STYLING
    const dropdownCount = options.map(option => ({
      ...option,
      label:  (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <span>{option.label}</span>
          <span>{`(${option.count})`}</span>
        </div>
      ),
    }));

    const dropdownStyles = {
      control: (provided) => ({
        ...provided,
        width: '200px', 
        backgroundColor: 'var(--gold)',
        border: '0px',
      }),
      menu: (provided) => ({
        ...provided,
        width: '200px', 
        backgroundColor: 'var(--gold)',
        
      }),
      placeholder: (provided) => ({
        ...provided,
        color: 'black',
      }),
      dropdownIndicator: (provided) => ({
        ...provided,
        color: 'black',
      }),
    };

    // const resetDropdown = (species) =>{
    //   setReq('all');
    //   // setReq(species);
    // }

    return (
      <div>
        <HeaderBar logo="logo.png" logo2="logo2.png"/>

        <div className="adopt-content">
            {/* drop down filtering animals, next to each animal and all, there should be a count on how many are left */}
            <div>
              <Select id='dropdown' options={dropdownCount} placeholder="All" onChange={e => setReq(e.value)} className='adopt-dropdown' styles={dropdownStyles}/>
            </div>

            {/* A card for each pet */}
            <div className="card-display">{cards}</div>
        </div>
      </div>
    );
  }
  
  export default Adopt;