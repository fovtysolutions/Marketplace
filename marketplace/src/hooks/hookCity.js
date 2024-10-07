import { useState, useEffect, useRef } from 'react';
import countryData from './country_state_citys.json';

const useLocationDropdown = (initialLocation = '') => {
  const [location, setLocation] = useState(initialLocation);
  const [filteredCities, setFilteredCities] = useState([]);
  const cityDropdownRef = useRef(null);
  
  const cities = countryData.flatMap(country => 
    country.states.flatMap(state => state.cities.map(city => city.name))
  );
  // const cities = ['Mumbai', 'Delhi', 'Kolkata', 'Chennai', 'Pune'];
  

  useEffect(() => {
    const savedLocation = sessionStorage.getItem('location');
    if (savedLocation) {
      setLocation(savedLocation);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('location', location);
  }, [location]);

  const handleCitySelect = (city) => {
    setLocation(city);
    setFilteredCities([]);
  };

  const handleInputChange = (cityValue) => {
    const inputValue = cityValue.toLowerCase();
    setLocation(cityValue);

    const filtered = cities.filter((city) =>
      city.toLowerCase().startsWith(inputValue)
    );
    setFilteredCities(filtered);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        cityDropdownRef.current &&
        !cityDropdownRef.current.contains(event.target)
      ) {
        setFilteredCities([]);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return {
    location,
    setLocation,
    filteredCities,
    handleInputChange,
    handleCitySelect,
    cityDropdownRef
  };
};

export default useLocationDropdown;
