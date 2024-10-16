import React, { useState, useEffect } from 'react';
import '../css/style.css';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FilterSection = ({ title, items, selectedFilters, setSelectedFilters }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [displayCount, setDisplayCount] = useState(5);

    const toggleList = () => {
        setIsOpen(!isOpen);
    };

    const handleFilter = async (item) => {
        let updatedFilters;
    
        if (selectedFilters.includes(item)) {
            updatedFilters = selectedFilters.filter(filter => filter !== item);
        } else {
            updatedFilters = [...selectedFilters, item];
        }
    
        setSelectedFilters(updatedFilters);
        
        // Log the correct updated filters
        console.log("Applied Filters", updatedFilters); // Check here if it is an array
    
        // Correctly save to AsyncStorage
        await AsyncStorage.setItem("FilterCriteria", JSON.stringify(updatedFilters)); // Use stringify
    };
    
    const showMore = () => {
        setDisplayCount(displayCount + 5);
    };

    return (
        <div>
            <p className="titlefilven" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong>{title}</strong>
                <button className="filterbuttonven" onClick={toggleList} style={{ backgroundColor: 'white' }}>
                    {isOpen ? '-' : '+'}
                </button>
            </p>
            {isOpen && (
                <ul className="filterlistven">
                    {items.slice(0, displayCount).map((item, index) => (
                        <li 
                            className="filteritemven" 
                            key={index} 
                            onClick={() => handleFilter(item)} 
                            style={{ fontWeight: selectedFilters.includes(item) ? 'bold' : 'normal' }}
                        >
                            {item}
                        </li>
                    ))}
                    {items.length > displayCount && (
                        <button className="showmore" onClick={showMore}>Show More</button>
                    )}
                </ul>
            )}
        </div>
    );
};

export default FilterSection;
