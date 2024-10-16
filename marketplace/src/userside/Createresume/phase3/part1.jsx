import React, { useEffect, useRef, useState } from "react";
import useLocationDropdown from '../../../hooks/hookCity';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import getData from '../../../hooks/getData';

const Partone = ({formID, formData, onPartOneChange, SavedDataphase3part1, errorHandle='success', errorHandle1=0}) => {
    //Data feching from backend
    const backend_URL = `${import.meta.env.VITE_BACKEND_URL}admin/selectoption`;
    const initalState = { selectoption: '',};
    const [getSelectOption] = useState(initalState);    
    const { hookHandleData, fetchData } = getData();
    useEffect(() => { selectOptionData(); }, []);
    const selectOptionData = () => { hookHandleData(getSelectOption, backend_URL); }

    //Data setup this
    const initialchange = {
        job_title: '',
        department: '',
        company: '',
        period_from: '',
        period_to: '',
        rol_responsibility: '',
        location: '',
    };
    const [allFormData, setformdata] = useState(formData || initialchange); 
    useEffect(() => {
        if (SavedDataphase3part1 !== "notavailable" && typeof SavedDataphase3part1 === 'object') {
            setformdata({
                job_title: SavedDataphase3part1.job_title || '',
                department: SavedDataphase3part1.department || '',
                company: SavedDataphase3part1.company || '',
                period_from: SavedDataphase3part1.period_from || '',
                period_to: SavedDataphase3part1.period_to || '',
                rol_responsibility: SavedDataphase3part1.rol_responsibility || '',
                location: SavedDataphase3part1.location || ''
            });
        }
      }, [JSON.stringify(SavedDataphase3part1)]);
    const [currentDate, setCurrentDate] = useState('');
    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedFormData = { ...allFormData, [name]: value };
        setformdata(updatedFormData);
        onPartOneChange(updatedFormData);
        if(name === 'location'){
            handleInputChange(value)
        }
    };
    const handlePresentChange = (e) => {
        const today = new Date();
        const formattedDate = today.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
        });
        const { name, value } = e.target;
        let updatedFormData = '';
        if (e.target.checked) {
            updatedFormData = { ...allFormData, [name]: formattedDate };
            setCurrentDate(formattedDate);
        }else{
            updatedFormData = { ...allFormData, [name]: '' };
            setCurrentDate('');
        }
        setformdata(updatedFormData);
        onPartOneChange(updatedFormData);
    }

    const [datePickers, setDatePickers] = useState({
        period_from: { selectedDate: null, showDatePicker: false },
        period_to: { selectedDate: null, showDatePicker: false },
    });
    
    const datePickerRefs = {
        period_from: useRef(null),
        period_to: useRef(null),
    };
    const handleDateChange = (field, date) => {
        setDatePickers((prevState) => ({
        ...prevState,
        [field]: {
            selectedDate: date,
            showDatePicker: false,
        },
        }));
        const formattedDate = date.toLocaleDateString();
        const updatedFormData = { ...allFormData, [field]: formattedDate };
        setformdata(updatedFormData);
        onPartOneChange(updatedFormData);
    };
    const toggleDatePicker = (event, field) => {
        event.stopPropagation(); 
        setDatePickers((prevState) => ({
        ...prevState,
        [field]: {
            ...prevState[field],
            showDatePicker: !prevState[field].showDatePicker,
        },
        }));
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
        if (
            !datePickerRefs.period_from.current?.contains(event.target) &&
            !datePickerRefs.period_to.current?.contains(event.target)
        ) {
            setDatePickers((prevState) => ({
            period_from: { ...prevState.period_from, showDatePicker: false },
            period_to: { ...prevState.period_to, showDatePicker: false },
            }));
        }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
        document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const [charCount, setCharCount] = useState(0);
    const maxChars = 800;
    const handletextChange = (e) => {
      const inputText = e.target.value;
      if (inputText.length <= maxChars) {
        setCharCount(inputText.length);
      } 
      const { name, value } = e.target;
      const updatedFormData = { ...allFormData, [name]: value };
        setformdata(updatedFormData);
        onPartOneChange(updatedFormData);
    };

    const {
        location,
        filteredCities,
        handleInputChange,
        handleCitySelect,
        cityDropdownRef
    } = useLocationDropdown(); // Call the hook
        
    return (
        <>
            <div id="Jobtitle">
                <label for="job_title">Job Title<span className="color-red">*</span></label>
                <input type="text" className="input w-input" maxlength="256" name="job_title" placeholder="Enter Here" id="job_title" value={allFormData.job_title} onChange={handleChange} />
                <div 
                    className={`${errorHandle1 === formID ? 'text-danger' : ''}`}
                    style={{ display: errorHandle1 === formID ? 'block' : 'none' }}
                    id="responsehandler"
                >
                        { errorHandle1 === formID ? errorHandle.job_title : '' }
                </div>
            </div>
            <div>
                <label for="department">Department<span className="color-red">*</span></label>
                <select name="department" id="department" required="" className="input w-input" value={allFormData.department} onChange={handleChange}>
                        <option value="" >Select Department</option>
                        {fetchData.map(depart =>
                            depart.type === 'department' ? (
                                <option key={depart.id} value={depart.name}>{depart.name}</option>
                            ) : null
                        )}
                </select>
                <div 
                    className={`${errorHandle1 === formID ? 'text-danger' : ''}`}
                    style={{ display: errorHandle1 === formID ? 'block' : 'none' }}
                    id="responsehandler"
                >
                        { errorHandle1 === formID ? errorHandle.department : '' }
                </div>
            </div>

            <div id="Companies">
                <label for="Company">Company<span className="color-red">*</span></label>
                <input type="text" className="input w-input" maxlength="256" name="company" placeholder="Enter Here" id="Company" value={allFormData.company} onChange={handleChange} />
                <div 
                    className={`${errorHandle1 === formID ? 'text-danger' : ''}`}
                    style={{ display: errorHandle1 === formID ? 'block' : 'none' }}
                    id="responsehandler"
                >
                        { errorHandle1 === formID ? errorHandle.company : '' }
                </div>
            </div>

            <div>
                <label for="period_from">Period<span className="color-red">*</span></label>
                <div className="shift-from-to">
                    <div  ref={datePickerRefs.period_from} style={{ position: 'relative', marginBottom: '20px' }} className="canphase3date">
                        <input 
                            type="text" 
                            className="input w-input" 
                            maxlength="256" 
                            name="period_from" 
                            placeholder="09/12/1999" 
                            id="period_from" 
                            min="01-01-1900" 
                            required=""
                            value={allFormData.period_from}
                            onClick={() => toggleDatePicker(event,'period_from')}
                        />
                        {datePickers.period_from.showDatePicker && (
                        <div style={{ position: 'absolute', zIndex: 1 }}>
                            <DatePicker
                                selected={datePickers.period_from.selectedDate}
                                onChange={(date) => handleDateChange('period_from', date)}
                                inline
                            />
                        </div>
                        )}
                        <div 
                            className={`${errorHandle1 === formID ? 'text-danger' : ''}`}
                            style={{ display: errorHandle1 === formID ? 'block' : 'none' }}
                            id="responsehandler"
                        >
                                { errorHandle1 === formID ? errorHandle.period_from : '' }
                        </div>
                    </div>
                    <div  ref={datePickerRefs.period_to} style={{ position: 'relative', marginBottom: '20px' }} className="canphase3date">
                        <input 
                            type="text" 
                            className="input w-input" 
                            maxlength="256" 
                            name="period_to" 
                            placeholder="09/12/1999" 
                            min="01-01-1900" 
                            id="period_to" 
                            required="" 
                            value={allFormData.period_to}
                            onClick={() => toggleDatePicker(event,'period_to')}
                            disabled={currentDate !== ''}
                        />
                        {datePickers.period_to.showDatePicker && (
                            <div style={{ position: 'absolute', zIndex: 1 }}>
                                <DatePicker
                                    selected={datePickers.period_to.selectedDate}
                                    onChange={(date) => handleDateChange('period_to', date)}
                                    inline
                                />
                            </div>
                        )}
                        <div className="canphase3Present">
                            <input type="checkbox" name="period_to" id="check_present" onChange={handlePresentChange} value={currentDate} />
                            <label className="canphase3Presentlabel" id="present" for="check_present">Present</label>
                        </div>
                        <div 
                            className={`${errorHandle1 === formID ? 'text-danger' : ''}`}
                            style={{ display: errorHandle1 === formID ? 'block' : 'none' }}
                            id="responsehandler"
                        >
                                { errorHandle1 === formID ? errorHandle.period_to : '' }
                        </div>
                    </div>
                </div>
            </div>

            <div id="w-node-_11ff66e2-bb63-3205-39c9-a48a569518d9-270281fa" className="input-container-full-width">
                <label for="inputField">Role and Responsibility</label>
                <textarea 
                    type="text" 
                    className="input w-input" 
                    name="rol_responsibility" 
                    onChange={handletextChange}
                    placeholder="Something Write Yourself...." 
                    col='10' 
                    rows="3"
                    maxlength="800"
                    id="inputField"
                    value={allFormData.rol_responsibility}
                    required=""
                ></textarea>
                <span className="canphase1fontsize" style={{ color: charCount > 799 ? 'red' : 'green' }} id="textMax">Maximum Length Should Be Below <span id="characterCount"> {charCount}</span> characters</span>
                <div 
                    className={`${errorHandle1 === formID ? 'text-danger' : ''}`}
                    style={{ display: errorHandle1 === formID ? 'block' : 'none' }}
                    id="responsehandler"
                >
                        { errorHandle1 === formID ? errorHandle.rol_responsibility : '' }
                </div>
            </div>

            <div>
                <label htmlFor="location">
                    Location<span className="color-red">*</span>
                </label>
                <div style={{ position: 'relative' }}>
                    <input
                        type="text"
                        className="input w-input inputlocation"
                        maxLength="256"
                        name="location"
                        placeholder="Mumbai"
                        id="location"
                        value={location === ''?allFormData.location:location}
                        onChange={handleChange}
                        required
                    />
                    {/* Dropdown */}
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
                        ref={cityDropdownRef}
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
                    <div 
                        className={`${errorHandle1 === formID ? 'text-danger' : ''}`}
                        style={{ display: errorHandle1 === formID ? 'block' : 'none' }}
                        id="responsehandler"
                    >
                            { errorHandle1 === formID ? errorHandle.location : '' }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Partone;