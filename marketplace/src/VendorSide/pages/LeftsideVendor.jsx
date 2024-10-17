import React, { useCallback, useEffect, useState } from "react";
import '../css/style.css';
import FilterSection from "../hooks/FilterSection";
import SampleData from "../data/SampleData.json";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useParams } from "react-router-dom";

const LeftSideVendor = ({ onFilterUpdate }) => {
    const { category } = useParams();
    const [Membership, setuniquemembership] = useState([]);
    const [ProductName, setuniqueProductName] = useState([]);
    const [Origin, setuniqueorigin] = useState([]);
    const [PriceRangeupper, setpricerangeupper] = useState('');
    const [PriceRangelower, setpricerangelower] = useState('');
    const [specification, setspecification] = useState([]);
    const [FOBport, setFOBport] = useState([]);
    const [SupplierLocation, setSupplierLocation] = useState([]);
    const [YearsinBusiness, setYearsinBusiness] = useState('');
    const [filtereditems, setfiltereditems] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState([]);

    const items = filtereditems.length > 0 ? filtereditems : SampleData;
    useEffect(() => {
        const loadFilters = async () => {
            const storedFilters = await AsyncStorage.getItem("FilterCriteria");
            console.log("Got Filters", storedFilters);
            if (storedFilters) {
                setSelectedFilters(JSON.parse(storedFilters));
                console.log("Stored Filters", selectedFilters);
            }
        };

        loadFilters();
    }, []);

    const filterItems = useCallback(() => {
        let filteredData = SampleData;

        // Always filter by category first
        if (category) {
            filteredData = filteredData.filter(item => item.category === category);
        }

        // Filter by Years in Business
        if (YearsinBusiness) {
            filteredData = filteredData.filter(item => item.yearsInBusiness >= YearsinBusiness);
        }

        // Filter by Price Range
        if (PriceRangelower || PriceRangeupper) {
            filteredData = filteredData.filter(item => {
                const price = parseFloat(item.price.replace('$', ''));
                const lowerBound = PriceRangelower ? parseFloat(PriceRangelower) : 0;
                const upperBound = PriceRangeupper ? parseFloat(PriceRangeupper) : Infinity;
                return price >= lowerBound && price <= upperBound;
            });
        }

        // Apply additional filters based on selectedFilters
        if (selectedFilters.length > 0) {
            filteredData = filteredData.filter(item =>
                selectedFilters.some(filter =>
                    item.membership === filter ||
                    item.badge === filter ||
                    item.description === filter ||
                    item.order === filter ||
                    item.origin === filter ||
                    item.rating === filter ||
                    item.title === filter
                )
            );
        }

        setfiltereditems(filteredData);
        onFilterUpdate(filteredData); // Pass filtered data back
    }, [category, PriceRangelower, PriceRangeupper, YearsinBusiness, selectedFilters, onFilterUpdate]);

    useEffect(() => {
        filterItems(); // Call filterItems when dependencies change
    }, [selectedFilters, filterItems]); // Ensure filterItems is a dependency

    useEffect(() => {
        const extractUniqueValues = (data) => {
            const uniquemembership = [... new Set(data.map(item => item.membership))];
            const uniqueProductName = [...new Set(data.map(item => item.title))];
            const uniqueOrigin = [...new Set(data.map(item => item.origin))];
            const uniqueSpecification = [...new Set(data.map(item => item.badge))];
            const uniqueFOBport = [...new Set(data.map(item => item.origin))];
            const uniqueSupplier = [...new Set(data.map(item => item.origin))];

            setuniquemembership(uniquemembership);
            setuniqueProductName(uniqueProductName);
            setuniqueorigin(uniqueOrigin);
            setspecification(uniqueSpecification);
            setFOBport(uniqueFOBport);
            setSupplierLocation(uniqueSupplier);
        };

        extractUniqueValues(SampleData);
    }, []);

    const handleFilterReset = async () => {
        setSelectedFilters([]);
        setfiltereditems(SampleData); // Reset to all items
        await AsyncStorage.removeItem("FilterCriteria"); // Clear stored filters
    };

    const handlelowprice=(e)=>{
        console.log("Lower End Price Set",e);
        setpricerangelower(e);
        filterItems();
    };

    const handlehighprice=(e)=>{
        console.log("Upped End Price Set",e);
        setpricerangeupper(e);
        filterItems();
    };

    const handleyearsinbusiness=(e)=>{
        console.log("Years in Business Set",e);
        setYearsinBusiness(e);
        filterItems();
    };

    return (
        <div className='leftsideven'>
            <div className='filterven'>
                <FilterSection title="Sort By Membership" items={Membership} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
                <FilterSection title="Sort By Product Name" items={ProductName} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
                <FilterSection title="Product Origin" items={Origin} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
                <FilterSection title="Sort By Specification" items={specification} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
                <p className="titlefilven"><strong>Price Range</strong></p>
                <div className="input-container">
                    <input className="inputfilven" type="text" placeholder="Min" value={PriceRangelower} onChange={(e) => handlelowprice(e.target.value)} />
                    <span className="input-divider">to</span>
                    <input className="inputfilven" type="text" placeholder="Max" value={PriceRangeupper} onChange={(e) => handlehighprice(e.target.value)} />
                </div>
                <FilterSection title="By FOB Port" items={FOBport} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
                <FilterSection title="Supplier Location" items={SupplierLocation} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
                <p className="titlefilven"><strong>Years in Business</strong></p>
                <input className="inputfilven" type="text" placeholder="Years" value={YearsinBusiness} onChange={(e) => handleyearsinbusiness(e.target.value)} /><br />
                <button className="buttonfilven" type="button" onClick={handleFilterReset}>Reset</button>
            </div>
            <div className='adleftven'>
                <img className="leftsidead" src="https://media.istockphoto.com/id/1921388010/photo/homemade-sweetmeats-with-chocolate-bars-and-cocoa-beans.jpg?s=612x612&w=0&k=20&c=9iWLDZZqgNp4ZS9Q79uIENcIC9mBGQ1ZtqqexSPq6fA=" alt="ad" />
            </div>
        </div>
    );
};

export default LeftSideVendor;
