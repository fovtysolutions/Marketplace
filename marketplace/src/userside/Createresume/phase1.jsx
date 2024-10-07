import React, { useEffect, useRef, useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import countryData from '../../hooks/country_state_citys.json';
import getData from '../../hooks/getData';

const Phase1 = ({ showthis=2, slideshow=8, sendDataToParent, errorHandle='success',SavedDataphase1="notavailable" }) => {
  
  let uniqueID = JSON.parse(sessionStorage.getItem("uid"));
  const initialState = {
    candidate_user_uid: uniqueID[1] || '',
    username: "",
    lastname: "",
    email: "",
    mobile: "",
    prilanguage: '',
    seclanguage: '',
    profileimg: '',
    dob: '',
    address: '',
    landmark: '',
    country: '',
    state: '',
    city: '',
    zipcode: '',
    description: '',
  };

  const [allFormData, setPhase1Data] = useState(initialState);

  useEffect(() => {
    if (SavedDataphase1 !== "notavailable" && typeof SavedDataphase1 === 'object') {
      setPhase1Data({
        candidate_user_uid: uniqueID[1] || '',
        username: SavedDataphase1.username || '',
        lastname: SavedDataphase1.lastname || '',
        email: SavedDataphase1.email || '',
        mobile: SavedDataphase1.mobile || '',
        prilanguage: SavedDataphase1.prilanguage || '',
        seclanguage: SavedDataphase1.seclanguage || '',
        profileimg: SavedDataphase1.profileimg || '',
        dob: SavedDataphase1.dob || '',
        address: SavedDataphase1.address || '',
        landmark: SavedDataphase1.landmark || '',
        country: SavedDataphase1.country || '',
        state: SavedDataphase1.state || '',
        city: SavedDataphase1.city || '',
        zipcode: SavedDataphase1.zipcode || '',
        description: SavedDataphase1.description || '',
      });
    }
  }, [JSON.stringify(SavedDataphase1), uniqueID[1]]);

const handleChange = (e) => {
    const { name, value } = e.target;
    setPhase1Data({ ...allFormData, [name]: value });
};

// console.log(allFormData);
useEffect(() => {
  sendDataToParent(allFormData);
}, [allFormData]);

  //Image select function 
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setPhase1Data({ ...allFormData, ['profileimg']: file });
    }
  };

  //Date select function
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const datePickerRef = useRef(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowDatePicker(false);
    const formattedDate = date.toLocaleDateString();
    setPhase1Data({ ...allFormData, ['dob']: formattedDate });
  };
  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
        setShowDatePicker(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  //Address select function
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const handleCountryChange = (e) => {
    const countryId = parseInt(e.target.value);
    setSelectedCountry(countryId);
    const country = countryData.find(country => country.id === countryId);
    setStates(country ? country.states : []);
    setSelectedState('');
    setCities([]);
    setPhase1Data({ ...allFormData, ['country']: country.name });
  };

  const handleStateChange = (e) => {
    const stateId = parseInt(e.target.value);
    setSelectedState(stateId);
    const state = states.find(state => state.id === stateId);
    setCities(state ? state.cities : []);
    setPhase1Data({ ...allFormData, ['state']: state.name });
  };

  //text area function
  const [charCount, setCharCount] = useState(0);
  const maxChars = 800;
  const handletextChange = (e) => {
    const inputText = e.target.value;
    if (inputText.length <= maxChars) {
      setCharCount(inputText.length);
    } 
    const { name, value } = e.target;
    setPhase1Data({ ...allFormData, [name]: value });
    sendDataToParent(allFormData);
  };

  //Data feching from backend
  const backend_URL = `${import.meta.env.VITE_BACKEND_URL}admin/selectoption`;
  const initalState = { selectoption: '',};
  const [getSelectOption] = useState(initalState);    
  const { hookHandleData, fetchData } = getData();
  useEffect(() => { selectOptionData(); }, []);
  const selectOptionData = () => { hookHandleData(getSelectOption, backend_URL); }

    return (
        <>
          <div data-w-id="" id="phaseContainer" class="form-container " style={{ display: showthis === 2 ? 'block' : 'none' }}>
            <div class="w-form">
              <div id="phaseone" className={`phase-container ${slideshow === 8 ? 'slide-left' : ''}`}>
                <form id="phase1form">
                  <div id="job-information" class="w-layout-grid grid-form">
                    <h2 id="w-node-a3d1ad77-e5aa-114b-bcd7-cde3db1bb746-270281fa" class="form-subtitle">1. Personal Details </h2>
                    <div>
                      <label htmlFor="Name">First Name<span class="color-red">*</span></label>
                        <input 
                          type="text" 
                          class="input w-input" 
                          maxLength="256" 
                          name="username" 
                          data-name="Name" 
                          placeholder="First Name" 
                          id="Name" 
                          required="" 
                          value={allFormData.username}
                          onChange={handleChange}
                        />
                    </div>
                    <div>
                      <label htmlFor="Name">Last Name<span class="color-red">*</span></label>
                        <input 
                          type="text" 
                          class="input w-input" 
                          maxLength="256" 
                          name="lastname" 
                          data-name="Name" 
                          placeholder="Last Name" 
                          id="Name" 
                          required="" 
                          value={allFormData.lastname}
                          onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="Email-4">Email<span class="color-red">*</span></label>
                        <input 
                          type="email" 
                          class="input w-input" 
                          maxLength="256" 
                          name="email" 
                          data-name="Email" 
                          placeholder="Your email" 
                          id="Email-4" 
                          required="" 
                          value={allFormData.email}
                          readOnly
                        />
                    </div>
                    <div>
                        <label htmlFor="tel">Contact no<span></span></label>
                        <input 
                          type="number" 
                          class="input w-input"
                          maxLength="256" 
                          name="mobile" 
                          data-name="tel" 
                          placeholder="your phone" 
                          id="tel" 
                          required="" 
                          value={allFormData.mobile}
                          onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="prilanguage">Primary language<span class="color-red">*</span></label>
                        <select class="input w-input" name="prilanguage" id="prilanguage" required="" value={allFormData.prilanguage} onChange={handleChange}>
                          <option value="">Select your primary language</option>
                          {fetchData.map(language =>
                              language.type === 'language' ? (
                                  <option key={language.id} value={language.name}>{language.name}</option>
                              ) : null
                          )}
                        </select>
                        <div 
                          className={`${errorHandle === 'success' ? '' : 'text-danger'}`}
                          style={{ display: errorHandle === 'success' ? 'none' : 'block' }}
                          id="responsehandler"
                        >
                                { errorHandle === 'success' ? '' : errorHandle.prilanguage }
                        </div>
                    </div>
                    <div>
                        <label htmlFor="seclanguage">Secondary language</label>
                        <select class="input w-input" name="seclanguage" id="seclanguage" value={allFormData.seclanguage} onChange={handleChange}>
                          <option value="">Select your secondry language</option>
                          {fetchData.map(language =>
                              language.type === 'language' ? (
                                  <option key={language.id} value={language.name}>{language.name}</option>
                              ) : null
                          )}
                        </select>
                    </div>
                    <div>
                      <label htmlFor="profile-pic">Upload Your Profile Pic<span class="color-red">*</span></label>
                      <div class="uploaded-image">
                        <img src={selectedImage === null?`${import.meta.env.VITE_IMAGE_URL}${allFormData.profileimg}`:selectedImage} alt="" id="profile-pic" />
                        <input 
                          type="file" 
                          class="input w-input upload-image" 
                          maxLength="256" 
                          data-name="upload-profile-pic" 
                          placeholder="Must be less than 100kB" 
                          id="upload-profile-pic" 
                          name="profileimg" 
                          accept="image/*"
                          onChange={handleImageChange}
                          required
                        />
                      </div>
                      <div 
                        className={`${errorHandle === 'success' ? '' : 'text-danger'}`}
                        style={{ display: errorHandle === 'success' ? 'none' : 'block' }}
                        id="responsehandler"
                      >
                              { errorHandle === 'success' ? '' : errorHandle.profileimg }
                      </div>
                    </div>
                    <div ref={datePickerRef}>
                      <label htmlFor="Dateofbirth">Date of birth<span class="color-red">*</span></label>
                      <input 
                        type="text" 
                        class="input w-input" 
                        value={allFormData.dob}
                        onClick={toggleDatePicker}
                        name="dob"
                        placeholder="Click to select a date"
                        style={{ padding: '10px', cursor: 'pointer' }}
                        required=""
                      />
                      {/* DatePicker component */}
                      {showDatePicker && (
                        <DatePicker
                          selected={selectedDate}
                          onChange={handleDateChange}
                          inline 
                        />
                      )}
                      <div 
                          className={`${errorHandle === 'success' ? '' : 'text-danger'}`}
                          style={{ display: errorHandle === 'success' ? 'none' : 'block' }}
                          id="responsehandler"
                        >
                                { errorHandle === 'success' ? '' : errorHandle.dob }
                      </div>
                    </div>
                    <div id="w-node-_11ff66e2-bb63-3205-39c9-a48a569518d9-270281fa" class="input-container-full-width">
                      <label htmlFor="address">Address<span class="color-red">*</span></label>
                      <input 
                        type="text" 
                        class="input w-input" 
                        maxLength="256" 
                        name="address" 
                        data-name="Name" 
                        placeholder="Street address" 
                        id="address" 
                        required="" 
                        value={allFormData.address} onChange={handleChange}
                      />
                      <div 
                          className={`${errorHandle === 'success' ? '' : 'text-danger'}`}
                          style={{ display: errorHandle === 'success' ? 'none' : 'block' }}
                          id="responsehandler"
                        >
                                { errorHandle === 'success' ? '' : errorHandle.address }
                        </div>
                    </div>
                    <div>
                      <input 
                        type="text" 
                        class="input w-input" 
                        maxLength="256" 
                        name="landmark" 
                        data-name="Job Location" 
                        placeholder="Landmark" 
                        id="landmark" 
                        value={allFormData.landmark} onChange={handleChange}
                      />
                    </div>
                    <div>
                        <select class="input w-input" name="country" id="country" required="" value={allFormData.country} onChange={handleCountryChange}>
                          <option value="">Select Country</option>
                          {countryData.map(country => (
                            <option key={country.id} value={country.id}>
                              {country.name}
                            </option>
                          ))}
                        </select>
                        <div 
                          className={`${errorHandle === 'success' ? '' : 'text-danger'}`}
                          style={{ display: errorHandle === 'success' ? 'none' : 'block' }}
                          id="responsehandler"
                        >
                                { errorHandle === 'success' ? '' : errorHandle.country }
                        </div>
                    </div>
                    <div>
                        <select class="input w-input" name="state" id="state" required="" value={allFormData.state} onChange={handleStateChange} disabled={!selectedCountry}>
                          <option value="">{allFormData.state === '' ? 'Select city' :allFormData.state}</option>
                          {states.map(state => (
                            <option key={state.id} value={state.id}>
                              {state.name}
                            </option>
                          ))}
                        </select>
                        <div 
                          className={`${errorHandle === 'success' ? '' : 'text-danger'}`}
                          style={{ display: errorHandle === 'success' ? 'none' : 'block' }}
                          id="responsehandler"
                        >
                                { errorHandle === 'success' ? '' : errorHandle.state }
                        </div>
                    </div>
                    <div>
                        <select class="input w-input" name="city" id="city" disabled={!selectedState} required="" value={allFormData.city} onChange={handleChange}>
                          <option value="">{allFormData.city === '' ? 'Select city' :allFormData.city}</option>
                          {cities.map(city => (
                            <option key={city.id} value={city.name}>
                              {city.name}
                            </option>
                          ))}
                        </select>
                        <div 
                          className={`${errorHandle === 'success' ? '' : 'text-danger'}`}
                          style={{ display: errorHandle === 'success' ? 'none' : 'block' }}
                          id="responsehandler"
                        >
                                { errorHandle === 'success' ? '' : errorHandle.city }
                        </div>
                    </div>
                    <div>
                      <input 
                        type="number" 
                        class="input w-input" 
                        maxLength="256" 
                        name="zipcode" 
                        data-name="Job Location" 
                        placeholder="Zipcode" 
                        id="zipcode" 
                        required="" 
                        value={allFormData.zipcode} onChange={handleChange}
                      />
                      <div 
                          className={`${errorHandle === 'success' ? '' : 'text-danger'}`}
                          style={{ display: errorHandle === 'success' ? 'none' : 'block' }}
                          id="responsehandler"
                        >
                                { errorHandle === 'success' ? '' : errorHandle.zipcode }
                        </div>
                    </div>
                    <div id="w-node-_11ff66e2-bb63-3205-39c9-a48a569518d9-270281fa" class="input-container-full-width">
                      <label htmlFor="inputField">Career Objective</label>
                      <textarea 
                        type="text" 
                        class="input w-input" 
                        name="description" 
                        onChange={handletextChange}
                        placeholder="Something Write Yourself...." 
                        col='10' 
                        rows="3"
                        maxLength="800"
                        id="inputField"
                        value={allFormData.description}
                        required=""
                      >radhe</textarea>
                      <span class="canphase1fontsize" style={{ color: charCount > 799 ? 'red' : 'green' }} id="textMax">Maximum Length Should Be Below <span id="characterCount"> {charCount}</span> characters</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
    );
};

export default Phase1;
