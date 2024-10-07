import React, { useEffect, useRef, useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Parttwo = ({ShiftFrom,ShiftTo,sendFromTime,sendToTime}) => {
    const [selectedTimeFrom, setSelectedTimeFrom] = useState(
        ShiftFrom ? new Date(ShiftFrom) : null
    );
    const [selectedTimeTo, setSelectedTimeTo] = useState(
        ShiftTo ? new Date(ShiftTo) : null
    );

    useEffect(() => {
        if (selectedTimeFrom) {
            sendFromTime(selectedTimeFrom);
        }
    }, [selectedTimeFrom]);

    useEffect(() => {
        if (selectedTimeTo) {
            sendToTime(selectedTimeTo);
        }
    }, [selectedTimeTo]);
        
    return (
        <>
            <div>
                <label for="shift-from">Shift</label>
                <div class="shift-from-to">
                    <div class="custom-time-dropdown">
                        <div class="input-wrapper">
                            <DatePicker
                                selected={selectedTimeFrom}
                                onChange={(date) => setSelectedTimeFrom(date)}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={15}
                                timeCaption="Time"
                                dateFormat="h:mm aa"
                                className="input w-input"
                                placeholderText="From"
                            />
                            <span class="clock-icon" id="clockIcon">&#x1F551;</span>
                        </div>
                    </div>
                    <label for="shift-to"></label>
                    <div class="custom-time-dropdown">
                        <div class="input-wrapper">
                            <DatePicker
                                selected={selectedTimeTo}
                                onChange={(date) => setSelectedTimeTo(date)}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={15}
                                timeCaption="Time"
                                dateFormat="h:mm aa"
                                className="input w-input"
                                placeholderText="To"
                            />
                            <span class="clock-icon" id="clockIcon">&#x1F551;</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Parttwo;