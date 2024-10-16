import React, { useEffect, useState } from "react";
import '../css/style.css';
import FilterSection from "../hooks/FilterSection";
import SampleData from "../data/SampleData";
import AsyncStorage from '@react-native-async-storage/async-storage';

const LeftSideVendor = ({ onFilterUpdate  }) => {
    const [Membership, setuniqueMembership] = useState([]);
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
            console.log("Got Filters",storedFilters);
            if (storedFilters) {
                setSelectedFilters(JSON.parse(storedFilters));
                console.log("Stored Filters",selectedFilters);
            }
        };

        loadFilters();
    }, []);

    useEffect(() => {
        const filterItems = () => {
            if (selectedFilters.length === 0) {
                setfiltereditems(SampleData); // No filters, show all
                onFilterUpdate(SampleData); // Pass all items back
                return;
            }

            const filteredData = SampleData.filter(item =>
                selectedFilters.some(filter =>
                    item.badge === filter ||
                    item.category === filter ||
                    item.description === filter ||
                    item.order === filter ||
                    item.origin === filter ||
                    item.rating === filter ||
                    item.title === filter
                )
            );

            setfiltereditems(filteredData);
            onFilterUpdate(filteredData); // Pass filtered data back
        };

        filterItems();
    }, [selectedFilters, onFilterUpdate]);

    useEffect(() => {
        const extractUniqueValues = (data) => {
            const uniqueMembership = [...new Set(data.map(item => item.category))];
            const uniqueProductName = [...new Set(data.map(item => item.title))];
            const uniqueOrigin = [...new Set(data.map(item => item.origin))];
            const uniqueSpecification = [...new Set(data.map(item => item.badge))];
            const uniqueFOBport = [...new Set(data.map(item => item.origin))];
            const uniqueSupplier = [...new Set(data.map(item => item.origin))];

            setuniqueMembership(uniqueMembership);
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

    return (
        <div className='leftsideven'>
            <div className='filterven'>
                <FilterSection title="Sort By Membership" items={Membership} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
                <FilterSection title="Sort By Product Name" items={ProductName} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
                <FilterSection title="Product Origin" items={Origin} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
                <FilterSection title="Sort By Specification" items={specification} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
                <p className="titlefilven"><strong>Price Range</strong></p>
                <div className="input-container">
                    <input className="inputfilven" type="number" placeholder="Min" value={PriceRangelower} onChange={(e) => setpricerangelower(e.target.value)} />
                    <span className="input-divider">to</span>
                    <input className="inputfilven" type="number" placeholder="Max" value={PriceRangeupper} onChange={(e) => setpricerangeupper(e.target.value)} />
                </div>
                <FilterSection title="By FOB Port" items={FOBport} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
                <FilterSection title="Supplier Location" items={SupplierLocation} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
                <p className="titlefilven"><strong>Years in Business</strong></p>
                <input className="inputfilven" placeholder="Years" value={YearsinBusiness} onChange={(e) => setYearsinBusiness(e.target.value)} /><br />
                <button className="buttonfilven" type="button" onClick={handleFilterReset}>Reset</button>
            </div>
            <div className='adleftven'>
                <img style={{ width: '100%', height: '800px' }} src="https://frla.org/wp-content/uploads/2020/08/300x600-Sample-Ad.png" alt="ad" />
            </div>
        </div>
    );
};

export default LeftSideVendor;
