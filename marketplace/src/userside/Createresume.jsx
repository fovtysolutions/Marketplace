import React, { useEffect, useRef, useState } from "react";
import "./02Style/resume.css";
import Uploadresume from "./Createresume/UploadResume";
import Phaseone from "./Createresume/phase1";
import Phasetwo from "./Createresume/phase2";
import Phasethree from "./Createresume/phase3";
import Phasefour from "./Createresume/phase4";
import Phasefive from "./Createresume/phase5";
import candidateSubmit from "../hooks/candidateSubmit";
import getPhaseData from "../hooks/getData";

const Createresume = () => {
    const [countfor, setCountforword] = useState(1);
    const [countback, setCountbackword] = useState(7);
    // window.scrollTo( countfor === 1 ? {top: 0, behavior: 'smooth'}:{ top: 500, behavior: 'smooth'});
    const increase = () => {
        setCountforword(prevCount => { if (prevCount < 6) { return prevCount + 1; } return prevCount;} );
        setCountbackword(backCount => {  return backCount=7; });
        window.scrollTo({ top: 500, behavior: 'smooth'});
        hookHandleSubmit('','','','setupagain');
    };
    const decrease = () => {
        setCountforword(prevCount => { if (prevCount > 1) { return prevCount - 1; } return prevCount;} );
        setCountbackword(backCount => { if (backCount > 1) { return backCount=countfor+5;} return backCount; });
        window.scrollTo( countfor === 1 ? {top: 0, behavior: 'smooth'}:{ top: 500, behavior: 'smooth'});
    };

    let routechange = '';
    switch (countfor) {
        case 1:
        routechange = 'uploadresume';
        break;
    case 2:
        routechange = 'resumephase1';
        break;
    case 3:
        routechange = 'resumephase2';
        break;
    case 4:
        routechange = 'resumephase3';
        break;
    case 5:
        routechange = 'resumephase4';
        break;
    case 6:
        routechange = 'resumephase5';
        break;
    default:
        routechange = '';
    }

    const [dataFromPhases, setDataFromPhases] = useState('');
    const handlePhaseData = (data) => {
      setDataFromPhases(data);
      hookHandleSubmit('','','','setupagain');
    };
    
    const { hookHandleSubmit, showSuccess, showError, phaseCount } = candidateSubmit();
    const backend_URL = `${import.meta.env.VITE_BACKEND_URL}${routechange}`;
    const [countSuccess, setSuccessCount] = useState(0);
    const [ErrorId, setErrorId] = useState(0);
    let totalSuccessCount = dataFromPhases.length;
    
    async function handleSubmit(e) {
        e.preventDefault();
    
        if (countfor === 2 || countfor === 5 || countfor === 6 || countfor === 1) {
            const formData = new FormData();
            for (const [key, value] of Object.entries(dataFromPhases)) {
                formData.append(key, value);
            }
            await hookHandleSubmit(formData, backend_URL);
        }
        if (countfor === 4 || countfor === 3) {
            if (dataFromPhases.length > 0) {
                let submissionFailed = false; 
                for (let index = 0; index < dataFromPhases.length; index++) {
                    if (submissionFailed) break; 
                    const form = dataFromPhases[index];
                    const backend_URL2 = `${import.meta.env.VITE_BACKEND_URL}${routechange}/${form.id}`;
                    const formData = new FormData();
                    for (const [key, value] of Object.entries(form)) {
                        formData.append(key, value);
                    }
                    await hookHandleSubmit(formData, backend_URL2);
                    if (isFormInvalid(form)) {
                        setErrorId(form.id);
                        submissionFailed = true;
                        break;
                    }
                    try {
                        setSuccessCount(index+1);
                    } catch (error) {
                        console.error(`Form submission failed for form ID: ${form.id}`, error);
                        submissionFailed = true;
                    }
                }
            }
        }
    }
    function isFormInvalid(form) {
        let requiredFields = [];
        if(countfor === 3){
            requiredFields = ['edu_level', 'degree', 'branch', 'institution', 'period_from', 'period_to', 'cgpa_sgpa'];
        }
        if(countfor === 4){
            requiredFields = ['job_title', 'department', 'company', 'period_from', 'period_to', 'rol_responsibility', 'location'];
        }
        for (const field of requiredFields) {
            if (!form[field] || form[field] === '' || form[field] === null) {
                return field;
            }
        }
        return false;
    };
    

    const sessionSave = JSON.parse(sessionStorage.getItem("uid"));
    const { hookHandleData, fetchData } = getPhaseData();
    const initialState = { Details: '',};
    const backend_URLDetails = `${import.meta.env.VITE_BACKEND_URL}resumephaseAlldetails/${sessionSave[1]}`;
    const getAllphaseData = () => {
        hookHandleData(initialState, backend_URLDetails);
    }

    useEffect(() => {
        if (countfor > 0) {
            getAllphaseData();
        }
        if (countfor === 2 || countfor === 5 || countfor === 1) {
            if (showError === 'success') {
                increase();
            }
        }
        if ((totalSuccessCount === countSuccess && countfor === 4) || (totalSuccessCount === countSuccess && countfor === 3)) {
            if (showError === 'success') {
                increase();
            }
        }
        if (countfor === 6 && showError === 'success') {
            location.href = '/dashboard';
        }
    }, [showError, countfor, totalSuccessCount, countSuccess ]);
    

    
    return (
        <>
            <div class="section short wf-section">
                <div class="container-default">
                    <div class=" grid-form-container canhidden">
                        <div class="form-text-containe cancontainer">
                            <div class="back-btn canbackbtn">
                            <a  class="btn canbtna">
                                <svg class="canwhite" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_20_62" class="canmask" maskUnits="userSpaceOnUse" x="0" y="0" width="20"
                                        height="20">
                                        <rect width="20" height="20" />
                                    </mask>
                                    <g mask="url(#mask0_20_62)">
                                        <path
                                        d="M15.3546 6.42791H1.59214L3.15391 4.8661C3.19972 4.82088 3.23613 4.76704 3.26105 4.70769C3.28597 4.64833 3.29891 4.58464 3.29912 4.52027C3.29933 4.45589 3.2868 4.39212 3.26226 4.3326C3.23772 4.27309 3.20166 4.21902 3.15614 4.1735C3.11062 4.12798 3.05655 4.09192 2.99704 4.06738C2.93752 4.04284 2.87375 4.03031 2.80937 4.03052C2.745 4.03073 2.6813 4.04366 2.62195 4.06859C2.5626 4.09351 2.50876 4.12992 2.46354 4.17573L0.191091 6.44818C0.0693458 6.57024 0.000976563 6.7356 0.000976562 6.90799C0.000976563 7.08038 0.0693458 7.24574 0.191091 7.3678L2.46354 9.64025C2.50888 9.68558 2.56271 9.72153 2.62195 9.74606C2.68118 9.77059 2.74467 9.78321 2.80879 9.7832C2.87291 9.78319 2.93639 9.77055 2.99562 9.74601C3.05486 9.72146 3.10867 9.68549 3.154 9.64015C3.19933 9.59481 3.23529 9.54098 3.25982 9.48174C3.28434 9.4225 3.29696 9.35901 3.29696 9.2949C3.29695 9.23078 3.28431 9.16729 3.25976 9.10806C3.23522 9.04883 3.19925 8.99501 3.15391 8.94968L1.60828 7.40422H15.3546C16.3179 7.40422 17.2417 7.78687 17.9228 8.468C18.6039 9.14913 18.9866 10.0729 18.9866 11.0362C18.9866 11.9995 18.6039 12.9233 17.9228 13.6044C17.2417 14.2855 16.3179 14.6682 15.3546 14.6682H9.7407C9.67623 14.6676 9.61228 14.6798 9.55255 14.7041C9.49282 14.7283 9.43849 14.7642 9.39269 14.8096C9.3469 14.855 9.31055 14.909 9.28574 14.9685C9.26094 15.028 9.24817 15.0918 9.24817 15.1563C9.24817 15.2208 9.26094 15.2846 9.28574 15.3441C9.31055 15.4037 9.3469 15.4577 9.39269 15.5031C9.43849 15.5484 9.49282 15.5843 9.55255 15.6086C9.61228 15.6329 9.67623 15.6451 9.7407 15.6445H15.3546C15.963 15.6495 16.5663 15.534 17.1298 15.3046C17.6933 15.0753 18.2058 14.7366 18.6378 14.3082C19.0697 13.8798 19.4126 13.3701 19.6465 12.8085C19.8805 12.2469 20.001 11.6446 20.001 11.0362C20.001 10.4278 19.8805 9.82545 19.6465 9.26386C19.4126 8.70227 19.0697 8.19257 18.6378 7.76415C18.2058 7.33574 17.6933 6.99709 17.1298 6.76775C16.5663 6.5384 15.963 6.4229 15.3546 6.42791Z" />
                                    </g>
                                </svg>
                                Back</a>
                            </div>
                            <h1 class="heading-size-1 opacity canpadding">
                                Submit your <span class="color-primary-1 underline">resume</span>
                            </h1>
                            <p class="opacity">
                                To apply for the position, please fill out the accompanying form and submit your resume. If
                                you have any questions or require assistance throughout the process, don't hesitate to reach
                                out to our support team at <a href="support@gritupp.com"> support@gritupp.com</a><br/>
                                Your application is important to us, and we appreciate your interest in becoming part of our team.
                            </p>
                        </div>
                        <div id="scrolldiv" class="main-resume-frame canscrolldiv">
                            <div class="align-left opacity canmargin">
                                <span id="changenumber">{countfor}</span>/<span>6</span>
                            </div>
                            <div id="resumePage" class="phase-container canwidth">
                                <Uploadresume 
                                    showthis={countfor} 
                                    slideshow={countback}
                                    sendDataToParentUpload={handlePhaseData}
                                    errorHandleUpload={showSuccess}
                                    SavedDataUploaded={countfor === 1 ?fetchData.canUser: "notavailable"}
                                ></Uploadresume>
                                <Phaseone 
                                    showthis={countfor} 
                                    slideshow={countback} 
                                    sendDataToParent={handlePhaseData}
                                    errorHandle={showSuccess}
                                    SavedDataphase1={countfor === 2 ?fetchData.canUser: "notavailable"}
                                ></Phaseone>
                                <Phasetwo 
                                    showthis={countfor} 
                                    slideshow={countback}
                                    SavedDataphase2={countfor === 3 ?fetchData.phaseOne: [] }
                                    sendDataToParentP2={handlePhaseData}
                                    errorHandle2={ErrorId}
                                    errorHandle21={showSuccess}
                                ></Phasetwo>
                                <Phasethree 
                                    showthis={countfor} 
                                    slideshow={countback}
                                    SavedDataphase3={countfor === 4 ?fetchData.phaseTwo: [] }
                                    sendDataToParentP3={handlePhaseData}
                                    errorHandle3={showSuccess}
                                    errorHandle31={ErrorId}
                                ></Phasethree>
                                <Phasefour 
                                    showthis={countfor} 
                                    slideshow={countback}
                                    SavedDataphase4={countfor === 5 ?fetchData.phaseThree: "notavailable" }
                                    sendDataToParentP4={handlePhaseData}
                                    errorHandle4={showSuccess}
                                ></Phasefour>
                                <Phasefive 
                                    showthis={countfor} 
                                    slideshow={countback}
                                    SavedDataphase5={countfor === 6 ?fetchData.phaseFour: "notavailable" }
                                    sendDataToParentP5={handlePhaseData}
                                    errorHandle5={showSuccess}
                                ></Phasefive>
                            </div>
                        </div>
                        <div class="canfooter">
                            <div class="all_Btns">
                                <div> <button id="backButton" style={{ opacity: countfor === 1 ? 0.5 : 1 }} disabled={countfor === 1} onClick={decrease} class="buttonBNS">Back</button></div>
                                <div>
                                    <button id="skipButton" onClick={increase} style={{ display: countfor === 1 ? 'inline' : 'none' }} class="buttonBNS canmarginright">Skip</button>
                                    <button id="nextButtonreal" onClick={(event) => showError === 'success' ? null : handleSubmit(event)} class="buttonBNS">Next</button>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Createresume;
