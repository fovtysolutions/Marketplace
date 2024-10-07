import React, { useEffect, useRef, useState } from "react";
import Partone from "./phase2/part1";
import Parttwo from "./phase2/part2";
import Partthree from "./phase2/part3";
import getPhaseCrudData from "../../hooks/getData";
import getDataAgain from '../../hooks/getData2';
const Phase2 = ({ showthis = 3, slideshow = 9, SavedDataphase2 = [], sendDataToParentP2, errorHandle2=0, errorHandle21='success'}) => {
  if(showthis === 3){
    const divRef = useRef(null);
    const anchorRef = useRef(null);
    const [dataFromPartone, setDataFromPartone] = useState(SavedDataphase2);
    const sessionSave = JSON.parse(sessionStorage.getItem("uid"));
    const backend_URLDetails = `${import.meta.env.VITE_BACKEND_URL}phase2add/${sessionSave[1]}`;
    let random = dataFromPartone.length;
    const [add, setAdd] = useState(null);
    const [deleted, setDeleted] = useState(null); 
    const { hookHandleData2, fetchData2 } = getDataAgain();
    const { hookHandleData, fetchData } = getPhaseCrudData();
    const handleClick = (add , deleted) => {
      if(add){
        const initialState = { addRow: add, };
        hookHandleData(initialState, backend_URLDetails);
        setAdd(add);
      }
      if(deleted){
        const initialState = { deleteRow: deleted, };
        hookHandleData(initialState, backend_URLDetails);
        setDeleted(deleted);
      }
    };
    const handlePartOne = (formId, updatedData) => {
      setDataFromPartone(prevData => {
        if (!Array.isArray(prevData)) {
          return [];
        }
        return prevData.map(form =>
          form.id === formId ? { ...form, ...updatedData } : form
        );
      });
    };
    useEffect(() => {
      const fetchLiveData = async () => {
        const initialState = { refreshRow: 'refresh', };
        await hookHandleData2(initialState, backend_URLDetails);
      };
      if (add || deleted) {
        fetchLiveData();
      }
    }, [add, deleted, backend_URLDetails]);

    useEffect(() => {
      sendDataToParentP2(dataFromPartone); 
      if (add) {
        setDataFromPartone(fetchData2);
        if (divRef.current) {
          divRef.current.scrollTo({
            top: divRef.current.scrollHeight,
            behavior: 'smooth',
          });
        }
      }
      if (deleted) {
        setDataFromPartone(fetchData2);
        if (divRef.current) {
          const newScrollTop = Math.max(divRef.current.scrollTop - 0, 0); 
          divRef.current.scrollTo({
            top: newScrollTop,
            behavior: 'smooth',
          });
        }
      }
    }, [dataFromPartone,fetchData2]);

    useEffect(() => {
      if (anchorRef.current) {
        anchorRef.current.click();
      }
    }, [errorHandle2]);

    return (
        <>
          <a hidden href={`#phase2form${errorHandle2}`} ref={anchorRef}>Click Me</a>
          <div id="phaseContainer" className="form-container" style={{ display: showthis === 3 ? 'block' : 'none' }}>
            <div className="w-form">
              <div ref={divRef} id="phaseTwo"  className={`phase-container phase2scroll ${slideshow === 9 ? 'slide-left' : ''}`}>
              {dataFromPartone.length > 0? (
                dataFromPartone.map((form, index) => (
                  <form id={`phase2form${form.id}`} key={index} method="POST">
                    <div id="company-information" className="w-layout-grid grid-form form-container canphase2div">
                      <h2 id="w-node-_4ef0b413-e918-4e38-caf9-14a7d812a0cf-270281fa" className="form-subtitle">2 .{index === 0?'':index} &nbsp; Education details </h2>
                      <Partone 
                        formID={form.id}
                        formData={form.partOneData} 
                        onPartOneChange={(updatedData) => handlePartOne(form.id, updatedData)} 
                        SavedDataphase2part1={form}
                        errorHandle={errorHandle2}
                        errorHandle1={errorHandle21}
                      />
                      <Parttwo 
                        formID={form.id} 
                        fileProject={JSON.parse(form.mejorproject) === null ? [] : JSON.parse(form.mejorproject)}
                      />
                      <Partthree 
                        formID={form.id} 
                        certification={JSON.parse(form.certification) === null ? [] : JSON.parse(form.certification)}
                      />
                      <div id="w-node-_11ff66e2-bb63-3205-39c9-a48a569518d9-270281fa" className="input-container-full-width">
                        <div className="remove-row" style={{ display: index === 0 ? 'none' : 'flex' }}>
                          <a type="button" id="deleterow" className="canred" onClick={() => handleClick('', form.id)}>
                            <svg fill="red" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
                            </svg>
                            <span>&nbsp; Remove This Education</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </form>
                ))
              ) : (
                <p></p>
              )}
              </div>
              <a 
                id="addedubtn" 
                type="button" 
                className="add-more-field-btn"
                onClick={() => handleClick(random, '')}
              >
                <svg fill="#15ef" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
                </svg>
                <span>Add Education+</span>
              </a>
            </div>
          </div>
        </>
    );
  };
};


export default Phase2;
