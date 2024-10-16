import React, { useEffect, useRef, useState } from "react";
import getData from '../../hooks/getData';
import Partone from "./phase5/part1";
import Parttwo from "./phase5/part2";

const Phase5 = ({showthis=6,slideshow=12,sendDataToParentP5,errorHandle5='success',SavedDataphase5="notavailable"}) => {
  if(showthis === 6){
    //Data feching from backend
    const backend_URL = `${import.meta.env.VITE_BACKEND_URL}admin/selectoption`;
    const initalState = { selectoption: '',};
    const [getSelectOption] = useState(initalState);    
    const { hookHandleData, fetchData } = getData();
    useEffect(() => { selectOptionData(); }, []);
    const selectOptionData = () => { hookHandleData(getSelectOption, backend_URL); }

    //instruction Hide and Sick
    const [showInstructionC, setInstructionC] = useState(null); 
    const [showInstructionE, setInstructionE] = useState(null); 
    const handleShowSick = (showIns) => { showIns=='Csalary'? setInstructionC("show"):setInstructionE("show");};
    const handleClickOutside = () => { setInstructionC("");setInstructionE("");};
    useEffect(() => {
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);
    
    //time set of input max and min length set
    const [showMaxMinLength, setShowMaxMinLength] = useState(null); 
    const handleChangeC = (e,salary) => {
      const { name, value } = e.target;
      if (value.length > 8) { return; }
      if (value.length < 5) {
        salary === 'Csalary'?setShowMaxMinLength('Chide'):setShowMaxMinLength('Ehide');
      } else {
        setShowMaxMinLength(salary); 
      }
      setPhase5Data({ ...allFormData, [name]: value,});
    }

      let uniqueID = JSON.parse(sessionStorage.getItem("uid"));
      const initialState = {
        uid: uniqueID[1] || '',
        department: "",
        work_mode: "",
        shift_from: "",
        shift_to: '',
        notice_period: '',
        current_salary: '',
        expected_salary: '',
        salary_mode: '',
        experience: '',
        acceptation: '',
      };
      const [allFormData, setPhase5Data] = useState(initialState);
      useEffect(() => {
        if (SavedDataphase5 !== "notavailable" && typeof SavedDataphase5 === 'object') {
          setPhase5Data({
            uid: uniqueID[1] || '',
            department: SavedDataphase5.department || '',
            work_mode: SavedDataphase5.work_mode || '',
            shift_from: SavedDataphase5.shift_from || '',
            shift_to: SavedDataphase5.shift_to || '',
            notice_period: SavedDataphase5.notice_period || '',
            current_salary: SavedDataphase5.current_salary || '',
            expected_salary: SavedDataphase5.expected_salary || '',
            salary_mode: SavedDataphase5.salary_mode || '',
            experience: SavedDataphase5.experience || '',
            acceptation: SavedDataphase5.acceptation || '',
          });
        }
      }, [JSON.stringify(SavedDataphase5), uniqueID[1]]);
      const handleChange = (e) => {
        const { name, value } = e.target;
        setPhase5Data({ ...allFormData, [name]: value });      
      };
      useEffect(() => {
        sendDataToParentP5(allFormData);
      }, [allFormData]);
      const handleFromData = (data) => {
        setPhase5Data({ ...allFormData, ['shift_from']: data }); 
      };
      const handleToData = (data) => {
        setPhase5Data({ ...allFormData, ['shift_to']: data }); 
      };
    
    return (
      <>
        <div data-w-id="" id="phaseContainer" className="form-container" style={{ display: showthis === 6 ? 'block' : 'none' }}>
          <div className="w-form">
            <div id="phaseone" className={`phase-container ${slideshow === 12 ? 'slide-left' : ''}`} >
              <form id="phase1form">
                <div id="job-information" className="w-layout-grid grid-form">
                  <h2 id="w-node-a3d1ad77-e5aa-114b-bcd7-cde3db1bb746-270281fa" className="form-subtitle">5. Preferred Employment </h2>
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
                      className={`${errorHandle5 === 'success' ? '' : 'text-danger'}`}
                      style={{ display: errorHandle5 === 'success' ? 'none' : 'block' }}
                      id="responsehandler"
                    >
                            { errorHandle5 === 'success' ? '' : errorHandle5.department }
                    </div>
                  </div>
                  <Partone 
                    formID={uniqueID[1]}   
                    Locationss={JSON.parse(SavedDataphase5.location) === null ? [] : JSON.parse(SavedDataphase5.location)}
                  />
                  <div>
                    <label for="work_mode">Work Mode<span className="color-red">*</span></label>
                    <select name="work_mode" id="work_mode" required="" className="input w-input" value={allFormData.work_mode} onChange={handleChange}>
                            <option value="" >Select Working Mode</option>
                            {fetchData.map(work =>
                                work.type === 'work_mode' ? (
                                    <option key={work.id} value={work.name}>{work.name}</option>
                                ) : null
                            )}
                    </select>
                    <div 
                      className={`${errorHandle5 === 'success' ? '' : 'text-danger'}`}
                      style={{ display: errorHandle5 === 'success' ? 'none' : 'block' }}
                      id="responsehandler"
                    >
                            { errorHandle5 === 'success' ? '' : errorHandle5.work_mode }
                    </div>
                  </div>
                  <Parttwo
                    ShiftFrom={SavedDataphase5.shift_from}
                    ShiftTo={SavedDataphase5.shift_to}
                    sendFromTime={handleFromData}
                    sendToTime={handleToData}
                  />                 
                  <div>
                    <label for="notice_period">Notice Period<span className="color-red">*</span></label>
                    <select name="notice_period" id="notice_period" required="" className="input w-input" value={allFormData.notice_period} onChange={handleChange}>
                      <option value="" >Select Notice Period</option>
                      {fetchData.map(data =>
                          data.type === 'notice_period' ? (
                              <option key={data.id} value={data.name}>{data.name}</option>
                          ) : null
                      )}
                    </select>
                    <div 
                      className={`${errorHandle5 === 'success' ? '' : 'text-danger'}`}
                      style={{ display: errorHandle5 === 'success' ? 'none' : 'block' }}
                      id="responsehandler"
                    >
                            { errorHandle5 === 'success' ? '' : errorHandle5.notice_period }
                    </div>
                  </div>
                  <div className="canphase2relative">
                    <label htmlFor="current_salary">Current Salary
                      <svg onMouseOver={() => handleShowSick('Csalary')} className="details-icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
                    </label>
                      <input 
                        type="number" 
                        className="input w-input" 
                        name="current_salary" 
                        placeholder="Enter here"
                        id="current_salary" 
                        required="" 
                        value={allFormData.current_salary} 
                        onChange={(e) => handleChangeC(e,'Csalary')}
                      />
                      <div id="instructionsDropdownExpected" className="dropDown-content cannotdisplay" style={{ display: showInstructionC === 'show' ? 'block' : 'none' }}>
                        <p >Instructions:</p>
                        <ul>
                            <li>Enter your expected salary in numbers.</li>
                            <li>Ensure the salary is between 10,000 and 9,99,99,999.</li>
                        </ul>
                      </div>
                      <div 
                        className={`${errorHandle5 === 'success' || showMaxMinLength === 'Chide' ? 'text-danger' : ''}`}
                        style={{ display: errorHandle5 === 'success' || showMaxMinLength === 'Chide' ? 'block' : 'none' }}
                      >
                              { showMaxMinLength === 'Chide' ? 'Salary must be between 5 and 8 digits.': '' }
                              { errorHandle5 === 'success' ? '' : errorHandle5.expected_salary }
                      </div>
                  </div>
                  <div className="canphase2relative">
                    <label htmlFor="expected_salary">Expected Salary<span className="color-red">*</span>
                      <svg onMouseOver={() => handleShowSick('Esalary')} className="details-icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
                    </label>
                      <input 
                        type="number" 
                        className="input w-input" 
                        name="expected_salary" 
                        placeholder="Enter here"
                        id="expected_salary" 
                        required="" 
                        maxLength="8"
                        minLength="5"
                        min="10000"
                        max="99999999"
                        value={allFormData.expected_salary} 
                        onChange={(e) => handleChangeC(e,'Esalary')}
                      />
                      <div id="instructionsDropdownExpected" className="dropDown-content cannotdisplay" style={{ display: showInstructionE === 'show' ? 'block' : 'none' }}>
                        <p >Instructions:</p>
                        <ul>
                            <li>Enter your expected salary in numbers.</li>
                            <li>Ensure the salary is between 10,000 and 9,99,99,999.</li>
                        </ul>
                      </div>
                      <div 
                        className={`${errorHandle5 === 'success' || showMaxMinLength === 'Ehide' ? 'text-danger' : ''}`}
                        style={{ display: errorHandle5 === 'success' || showMaxMinLength === 'Ehide' ? 'block' : 'none' }}
                      >
                              { showMaxMinLength === 'Ehide' ? 'Salary must be between 5 and 8 digits.': '' }
                              { errorHandle5 === 'success' ? '' : errorHandle5.expected_salary }
                      </div>
                  </div>
                  <div className="container">
                    <label for="salary_mode">Salary Mode <span className="color-red">*</span></label>
                    <div className="salaryModemain">
                      <div className="flex salaryModeDiv">
                          <input type="radio" name="salary_mode" id="selectSalary2" value="Monthly" checked={allFormData.salary_mode === 'Monthly'} onChange={handleChange}/>
                          <label for="selectSalary2" className="salaryModeRadio">Monthly</label>
                      </div>
                      <div className="flex salaryModeDiv">
                          <input type="radio" name="salary_mode" id="selectSalary3" value="Annualy" checked={allFormData.salary_mode === 'Annualy'} onChange={handleChange} />
                          <label for="selectSalary3" className="salaryModeRadio">Annually</label>
                      </div>
                    </div>
                    <div 
                      className={`${errorHandle5 === 'success' ? '' : 'text-danger'}`}
                      style={{ display: errorHandle5 === 'success' ? 'none' : 'block' }}
                      id="responsehandler"
                    >
                            { errorHandle5 === 'success' ? '' : errorHandle5.salary_mode }
                    </div>
                  </div>
                  <div>
                    <label htmlFor="experience">Experience<span className="color-red">*</span></label>
                      <input 
                        type="number" 
                        className="input w-input" 
                        name="experience" 
                        placeholder="Enter here"
                        id="experience" 
                        required="" 
                        maxLength="8"
                        minLength="5"
                        value={allFormData.experience} 
                        onChange={handleChange}
                        // value={allFormData.experience}
                      />
                      <div 
                        className={`${errorHandle5 === 'success' ? '' : 'text-danger'}`}
                        style={{ display: errorHandle5 === 'success' ? 'none' : 'block' }}
                        id="responsehandler"
                      >
                              { errorHandle5 === 'success' ? '' : errorHandle5.experience }
                      </div>
                  </div>
                  <div className="input-container-full-width" id="w-node-_11ff66e2-bb63-3205-39c9-a48a569518d9-270281fa">
                    <p>Accept given terms and conditions:</p>
                    <div className="terms-conditions">
                      <div className="checkbox">
                        <input type="checkbox" name="acceptation" id="check-info" required value={allFormData.acceptation} onChange={handleChange} checked={allFormData.acceptation === 'Accept'}/>
                        <label for="check-info">The information provided is authentic and has been authored by you.</label>
                      </div>
                    </div> 
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Phase5;
