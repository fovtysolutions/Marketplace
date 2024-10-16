import React, { useState } from 'react';
import '../css/style.css';
import LeftSideVendor from './LeftsideVendor';
import RightSideVendor from './RightsideVendor';
import BottomsideVendor from './BottomsideVendor';
import StickySideIcons from './StickySideIcons';

const Vendor = () => {
    const [filteredData, setFilteredData] = useState([]);

    const handleFilteredDataUpdate = (data) => {
        setFilteredData(data);
    };

    return (
        <>
            <div className='vendorcontainer'>
                <LeftSideVendor onFilterUpdate={handleFilteredDataUpdate} />
                <RightSideVendor data={filteredData} />
                <StickySideIcons />
            </div>
            <div className='vendorbottomcontainer'>
                <BottomsideVendor />
            </div>
        </>
    );
}

export default Vendor;
