import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import locationData from '../../../hooks/getData';
import countryData from '../../../hooks/country_state_citys.json';

const Partone = ({formID=1, Locationss=[]}) => {
    const [Location, setLocations] = useState(Locationss);
    const [formData, setFormData] = useState({ locations: '' });
    const cities = countryData.flatMap(country =>
        country.states.flatMap(state => state.cities.map(city => city.name))
    );
      const [filteredCities, setFilteredCities] = useState([]); 
      const handleInputChanges = (e) => {
        const { value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          locations: value,
        }));
        if (value) {
          const selectCity = cities.filter(city =>
            city.toLowerCase().includes(value.toLowerCase())
          );
          setFilteredCities(selectCity);
        } else {
          setFilteredCities([]);
        }
      };
      const handleCitySelect = (city) => {
        setFormData((prevData) => ({
          ...prevData,
          locations: city,
        }));
        setFilteredCities([]);
      };

    const getAllphaseData = (locat) => {
        const initialState = {
            alllocation: JSON.stringify(locat),
        };
        const backend_URLDetails = `${import.meta.env.VITE_BACKEND_URL}getalllocation/${formID}`;
        hookHandleData(initialState, backend_URLDetails);
    };
    const handleAddLocation = () => {
        if (formData.locations) {
                const isDuplicate = Location.some((loc) => loc.locations.toLowerCase() === formData.locations.toLowerCase());
            if (isDuplicate) {
                alert('This location is already added.');
                return;
            }
            setLocations((prevCerts) => {
                const updatedLocation = [...prevCerts, formData];
                getAllphaseData(updatedLocation);
                return updatedLocation;
            });
            setFormData({ locations: ''}); 
        } else {
            alert('Please fill all fields before adding.');
        }
    };
    const handleDeleteLocation = (index) => {
        setLocations((prevCerts) => {
            const updatedLocation = prevCerts.filter((_, i) => i !== index);
            getAllphaseData(updatedLocation);
            return updatedLocation;
        });
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); 
            handleAddLocation(); 
        }
    };
    const { hookHandleData, fetchData } = locationData(); 

    return (
        <>
          <div id="locationInput" class="dropdown">
            <label for="location">Location</label>
            <div class="locationDivinput" style={{ position: 'relative' }}>
                <input 
                  type="text" 
                  class="input w-input" 
                  maxlength="256" 
                  name="locations" 
                  data-name="Company Website" 
                  placeholder="Delhi" 
                  id="location" 
                  value={formData.locations} 
                  onChange={handleInputChanges} 
                  onKeyDown={handleKeyDown}
                />
                {filteredCities.length > 0 && (
                    <div
                        className="dropdown-content"
                        id="cityDropdown"
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: '0',
                            display: filteredCities.length > 0 ? 'block' : 'none',
                        }}
                    >
                        {filteredCities.map((city, index) => (
                            <a
                                key={index}
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleCitySelect(city);
                                }}
                            >
                                {city}
                            </a>
                        ))}
                    </div>
                    )}
                <div class="dropdown-content" id="cityDropdown"></div>
                <p class="button-primary locationAddbtn" onClick={handleAddLocation} id="addbtn">Add</p>
            </div>
            <div id="locationItem" class="fancy-scroll">
              {Location.map((loc, index) => ( 
                <>
                    <p class="aftercontent">{loc.locations}</p>
                    <svg 
                        style={{ marginTop: '-2.5rem', marginLeft: '-0.5rem', cursor: 'pointer', marginRight: '1rem' }}
                        xmlns="http://www.w3.org/2000/svg" 
                        height="15" 
                        width="10" 
                        viewBox="0 0 384 512" 
                        id="remove-skill"
                        class="skill-remove"
                        onClick={() => handleDeleteLocation(index)}
                    >
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                </>
              ))}
            </div>
          </div>
        </>
    );
};

export default Partone;
