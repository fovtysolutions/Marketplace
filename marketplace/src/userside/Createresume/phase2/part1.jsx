import React, { useEffect, useRef, useState } from "react";
import getData from '../../../hooks/getData';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Partone = ({formData, onPartOneChange, formID, SavedDataphase2part1, errorHandle=0, errorHandle1='success'}) => {
    //Data feching from backend
    const backend_URL = `${import.meta.env.VITE_BACKEND_URL}admin/selectoption`;
    const initalState = { selectoption: '',};
    const [getSelectOption] = useState(initalState);    
    const { hookHandleData, fetchData } = getData();
    useEffect(() => { selectOptionData(); }, []);
    const selectOptionData = () => { hookHandleData(getSelectOption, backend_URL); }

    //Data setup this
    const initialchange = {
        edu_level: '',
        degree: '',
        branch: '',
        institution: '',
        period_from: '',
        period_to: '',
        cgpa_sgpa: '',
    };
    const [allFormData, setformdata] = useState(formData || initialchange); 
    useEffect(() => {
        if (SavedDataphase2part1 !== "notavailable" && typeof SavedDataphase2part1 === 'object') {
            setformdata({
            edu_level: SavedDataphase2part1.edu_level || '',
            degree: SavedDataphase2part1.degree || '',
            branch: SavedDataphase2part1.branch || '',
            institution: SavedDataphase2part1.institution || '',
            period_from: SavedDataphase2part1.period_from || '',
            period_to: SavedDataphase2part1.period_to || '',
            cgpa_sgpa: SavedDataphase2part1.cgpa_sgpa || ''
          });
        }
      }, [JSON.stringify(SavedDataphase2part1)]);
    const [selectedLevel, setSelectedLevel] = useState('');
    const [selectedDegree, setSelectedDegree] = useState('');
    const handleLevelChange = (e) => {
        const { value } = e.target;
        setSelectedLevel(value);
        const updatedFormData = { ...allFormData, edu_level: value };
        setformdata(updatedFormData);
        onPartOneChange(updatedFormData);
    };
    const handleDgreeChange = (e) => {
        const { name, value } = e.target;
        const updatedFormData = { ...allFormData, [name]: value };
        setformdata(updatedFormData);
        onPartOneChange(updatedFormData);
        setSelectedDegree(value);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedFormData = { ...allFormData, [name]: value };
        setformdata(updatedFormData);
        onPartOneChange(updatedFormData);
    };
    // console.log(allFormData);
    // useEffect(() => {
    //     console.log(allFormData);
    //   }, [allFormData]);

    // Date for date input field
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
    const toggleDatePicker = (field) => {
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

    const otherReset = () => {
        setSelectedLevel('');
    }

    

    return (
        <>
            <div style={{ display: selectedLevel === 'other' ? 'none' : 'block' }}>
                <label htmlFor="CompanyWebsite">Education Level<span class="color-red">*</span></label>
                <select name="edu_level" id="CompanyWebsite" required="" class="input w-input" value={allFormData.edu_level} onChange={handleLevelChange} disabled={selectedLevel === 'other'} >
                    <option value="">{allFormData.edu_level === '' ? 'Select education level':allFormData.edu_level}</option>
                    {fetchData.map(level =>
                        level.type === 'Degree' ? (
                            <option key={level.id} value={level.name}>{level.name}</option>
                        ) : null
                    )}
                    <option value="other">Other</option>
                </select>
                <div 
                    className={`${errorHandle === formID ? 'text-danger' : ''}`}
                    style={{ display: errorHandle === formID ? 'block' : 'none' }}
                    id="responsehandler"
                >
                        { errorHandle === formID ? errorHandle1.edu_level : '' }
                </div>
            </div>

            <div style={{ display: selectedLevel === 'other' ? 'none' : 'block' }}>
                <label htmlFor="selectMajor">Degree<span class="color-red">*</span></label>
                <select name="degree" id="selectMajor" required="" class="input w-input" value={allFormData.degree} onChange={handleDgreeChange} disabled={selectedLevel === '' || selectedLevel === 'other'}>
                    <option value="">{allFormData.degree === '' ? 'Select education level':allFormData.degree}</option>
                    {fetchData.map(degree =>
                        degree.type === selectedLevel ? (
                            <option key={degree.id} value={degree.name}>{degree.name}</option>
                        ) : null
                    )}
                </select>
                <div 
                    className={`${errorHandle === formID ? 'text-danger' : ''}`}
                    style={{ display: errorHandle === formID ? 'block' : 'none' }}
                    id="responsehandler"
                >
                        { errorHandle === formID ? errorHandle1.degree : '' }
                </div>
            </div>

            <div style={{ display: selectedLevel === 'other' ? 'none' : 'block' }}>
                <label htmlFor="selectBranch">Branch<span class="color-red">*</span></label>
                <select name="branch" id="selectBranch" required="" class="input w-input" disabled={selectedDegree === '' || selectedLevel === 'other'} value={allFormData.branch} onChange={handleChange}>
                    <option value="">{allFormData.branch === '' ? 'Select education level':allFormData.branch}</option>
                    {fetchData.map(branch =>
                        branch.type === selectedDegree ? (
                            <option key={branch.id} value={branch.name}>{branch.name}</option>
                        ) : null
                    )}
                </select>
                <div 
                    className={`${errorHandle === formID ? 'text-danger' : ''}`}
                    style={{ display: errorHandle === formID ? 'block' : 'none' }}
                    id="responsehandler"
                >
                        { errorHandle === formID ? errorHandle1.branch : '' }
                </div>
            </div>

            <div id="otherEduLevel" style={{ display: selectedLevel === 'other' ? 'block' : 'none' }}>
                <label htmlFor="CompanyEduLevel">Education Level's Other<span class="color-red">*</span></label>
                <input type="text" class="input w-input" maxLength="256" name="edu_level" placeholder="Enter Here" id="CompanyEduLevel" value={allFormData.edu_level} onChange={handleChange} disabled={!selectedLevel === 'other'} />
                <a class="d-flex justify-content-end text-primary curser" onClick={otherReset} >Reset</a>
                <div 
                    className={`${errorHandle === formID ? 'text-danger' : ''}`}
                    style={{ display: errorHandle === formID ? 'block' : 'none' }}
                    id="responsehandler"
                >
                        { errorHandle === formID ? errorHandle1.edu_level : '' }
                </div>
            </div>

            <div id="otherMajor" style={{ display: selectedLevel === 'other' ? 'block' : 'none' }}>
                <label htmlFor="Companymajor">Degree's Other<span class="color-red">*</span></label>
                <input type="text" class="input w-input" maxLength="256" name="degree" placeholder="Enter Here" id="Companymajor" value={allFormData.degree} onChange={handleChange} disabled={!selectedLevel === 'other'} />
                <div 
                    className={`${errorHandle === formID ? 'text-danger' : ''}`}
                    style={{ display: errorHandle === formID ? 'block' : 'none' }}
                    id="responsehandler"
                >
                        { errorHandle === formID ? errorHandle1.degree : '' }
                </div>
            </div>

            <div id="otherBranch" style={{ display: selectedLevel === 'other' ? 'block' : 'none' }}>
                <label htmlFor="CompanyBranch">Branch's Other<span class="color-red">*</span></label>
                <input type="text" class="input w-input" maxLength="256" name="branch" placeholder="Enter Here" id="CompanyBranch" value={allFormData.branch} onChange={handleChange} disabled={!selectedLevel === 'other'} />
                <div 
                    className={`${errorHandle === formID ? 'text-danger' : ''}`}
                    style={{ display: errorHandle === formID ? 'block' : 'none' }}
                    id="responsehandler"
                >
                        { errorHandle === formID ? errorHandle1.branch : '' }
                </div>
            </div>

            <div>
                <label htmlFor="institution">Institute / University<span class="color-red">*</span></label>
                <input 
                    type="text" 
                    class="input w-input" 
                    maxLength="256" 
                    name="institution" 
                    placeholder="Type your Institute name" 
                    id="institution" 
                    required=""  
                    value={allFormData.institution} 
                    onChange={handleChange}
                />
                <div 
                    className={`${errorHandle === formID ? 'text-danger' : ''}`}
                    style={{ display: errorHandle === formID ? 'block' : 'none' }}
                    id="responsehandler"
                >
                        { errorHandle === formID ? errorHandle1.institution : '' }
                </div>
            </div>

            <div ref={datePickerRefs.period_from} style={{ position: 'relative', marginBottom: '20px' }}>
                <label htmlFor="period_from">From<span class="color-red">*</span></label>
                <input 
                    type="text" 
                    class="input w-input" 
                    maxLength="256" 
                    name="period_from" 
                    placeholder="09/12/1999" 
                    id="period_from" 
                    min="01-01-1900" 
                    required=""
                    value={allFormData.period_from}
                    onClick={() => toggleDatePicker('period_from')}
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
                    className={`${errorHandle === formID ? 'text-danger' : ''}`}
                    style={{ display: errorHandle === formID ? 'block' : 'none' }}
                    id="responsehandler"
                >
                        { errorHandle === formID ? errorHandle1.period_from : '' }
                </div>
            </div>

            <div ref={datePickerRefs.period_to} style={{ position: 'relative', marginBottom: '20px' }}>
                <label htmlFor="period_to">To<span class="color-red">*</span></label>
                <input 
                    type="text" 
                    class="input w-input" 
                    maxLength="256" 
                    name="period_to" 
                    placeholder="09/12/1999" 
                    min="01-01-1900" 
                    id="period_to" 
                    required="" 
                    value={allFormData.period_to}
                    onClick={() => toggleDatePicker('period_to')}
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
                <div 
                    className={`${errorHandle === formID ? 'text-danger' : ''}`}
                    style={{ display: errorHandle === formID ? 'block' : 'none' }}
                    id="responsehandler"
                >
                        { errorHandle === formID ? errorHandle1.period_to : '' }
                </div>
            </div>

            <div>
                <label htmlFor="cgpasgpa">CGPA / SGPA</label>
                <input 
                    type="text" 
                    class="input w-input" 
                    maxLength="256" 
                    name="cgpa_sgpa" 
                    placeholder="7.5/4.5" 
                    id="cgpasgpa" 
                    value={allFormData.cgpa_sgpa} 
                    onChange={handleChange}
                />
                <div 
                    className={`${errorHandle === formID ? 'text-danger' : ''}`}
                    style={{ display: errorHandle === formID ? 'block' : 'none' }}
                    id="responsehandler"
                >
                        { errorHandle === formID ? errorHandle1.cgpa_sgpa : '' }
                </div>
            </div>
        </>
    );
};

export default Partone;
