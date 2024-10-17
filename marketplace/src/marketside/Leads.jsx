import React from 'react';
import './01Style/Leads.css';
import { GiHamburgerMenu } from "react-icons/gi";

const Leads = () => {
    const buyLeads = [
        {
            flag: './img/1.png',
            title: 'Need Sellers For PP Woven Bags',
            daysAgo: '2 days ago'
        },
        {
            flag: './img/2.png',
            title: 'Unisign 100% Polyester Coated Fabric',
            daysAgo: '1 day ago'
        },
        {
            flag: './img/3.png',
            title: 'Want CUBICON SINGLE PLUS 3D Printer',
            daysAgo: '2 days ago'
        },
        {
            flag: './img/4.png',
            title: 'Demand For Micro Inverter',
            daysAgo: '1 day ago'
        },
        {
            flag: './img/5.png',
            title: 'Looking For Cashew Nut',
            daysAgo: '2 days ago'
        },
        {
            flag: './img/6.png',
            title: 'Interested In Diesel',
            daysAgo: '1 day ago'
        },
        {
            flag: './img/7.png',
            title: 'Keen To Purchase Sound Level Meter',
            daysAgo: '2 days ago'
        },
        {
            flag: './img/8.png',
            title: 'Keen To Purchase LED Table Lamps',
            daysAgo: '1 day ago'
        }
    ];

    const sellLeads = [
        {
            flag: './img/8.png',
            title: 'Selling Solar Panels',
            daysAgo: '3 days ago'
        },
        {
            flag: './img/7.png',
            title: 'Offering Industrial Machines',
            daysAgo: '2 days ago'
        },
        {
            flag: './img/6.png',
            title: 'Exporting Frozen Meat',
            daysAgo: '1 day ago'
        },
        {
            flag: './img/5.png',
            title: 'Selling Used Cars',
            daysAgo: '4 days ago'
        },
        {
            flag: './img/4.png',
            title: 'Offering Organic Cosmetics',
            daysAgo: '5 days ago'
        },
        {
            flag: './img/3.png',
            title: 'Exporting Fresh Fruits',
            daysAgo: '3 days ago'
        },
        {
            flag: './img/2.png',
            title: 'Selling Coffee Beans',
            daysAgo: '2 days ago'
        },
        {
            flag: './img/1.png',
            title: 'Offering Wool Products',
            daysAgo: '1 day ago'
        }
    ];

    return (
        <div className="leads-container">
            {/* Buy Leads Section */}
            <div className="buy-leads-container">
                <div className="header">
                    <h2>< GiHamburgerMenu /> Latest Buy Leads</h2>
                    <button className="view-all-btn">View All Leads</button>
                </div>
                <ul className="leads-list">
                    {buyLeads.map((lead, index) => (
                        <li className="lead-item" key={index}>
                            <img src={`${lead.flag}`} alt={`${lead.title} Flag`} />
                            <span>{lead.title}</span>
                            <span className="time">{lead.daysAgo}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Sell Leads Section */}
            <div className="sell-leads-container">
                <div className="header">
                    <h2>< GiHamburgerMenu />Latest Sell Leads</h2>
                    <button className="view-all-btn">View All Leads</button>
                </div>
                <ul className="leads-list">
                    {sellLeads.map((lead, index) => (
                        <li className="lead-item" key={index}>
                            <img src={`${lead.flag}`} alt={`${lead.title} Flag`} />
                            <span>{lead.title}</span>
                            <span className="time">{lead.daysAgo}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Leads;
