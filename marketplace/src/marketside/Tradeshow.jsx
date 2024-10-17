import React from 'react';
import './01Style/TradeShow.css'; // Optional: You can create a separate CSS file for styles
import { FaCalendarAlt } from "react-icons/fa";

const TradeShow = () => {
  const handleMonthClick = (event) => {
    event.currentTarget.classList.toggle('active');
  };

  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <h4><FaCalendarAlt /> Trade Show</h4>
          <i className="calendar-icon fa fa-calendar"></i>
        </div>
        <ul className="months">
          {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
            <li key={index} onClick={handleMonthClick}>{month}</li>
          ))}
        </ul>
        <div className="image-container">
          <img src="./img/10.png" alt="Image 1" />
          <img src="./img/11.png" alt="Image 2" />
        </div>
        {/* <div className="content">
          <h2>Event Details</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
        </div>
        <div className="details">
          <strong>Date:</strong> 12th February 2023
          <strong>Time:</strong> 10:00 AM - 6:00 PM
          <strong>Venue:</strong> Las Vegas Convention Center
        </div> */}
      </div>
    </div>
  );
};

export default TradeShow;
