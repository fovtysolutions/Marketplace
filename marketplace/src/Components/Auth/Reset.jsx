import React, { useEffect, useRef, useState } from "react";
import useHandleSubmit from '../../hooks/useHandleSubmit';

const Reset = () => {
    //eye click for password type change function start
    const [passIntype, setPassintype] = useState("password");
    const [cPassintype, setCpassintype] = useState("password");
    const togglepassShow = () => { setPassintype(prevType => (prevType === "password" ? "text" : "password"));};
    const togglecpassShow = () => { setCpassintype(prevType => (prevType === "password" ? "text" : "password"));};
    //eye click for password type change function start

    const backend_URL = `${import.meta.env.VITE_BACKEND_URL}reset`;
    const initalState = {
        email: "",
        password: "",
        cpassword: "",
    };
    const [resetFormData, setresetFormData] = useState(initalState);
    const { hookHandleSubmit, passwordMatchErr, showError } = useHandleSubmit();
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setresetFormData({ ...resetFormData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        hookHandleSubmit(resetFormData,backend_URL,'/login');
    };

    return (
        <>
            <div className="utility-page-wrap">
                <div
                data-w-id="5e86ada79942c1e4247fd4c700000000000b"
                className="utility-page-content-password w-password-page w-form"
                >
                <form
                    id="registerform"
                    className="utility-page-form w-password-page"
                    onSubmit={handleSubmit}
                >
                    <div className="icon-password-content">
                        <img src="https://assets.website-files.com/5ec5d86528da2f24250d634c/5ecda3ef4028e0abe32b01b8_icon-password-jobs-template.svg" alt="Password Protected - " className="icon-password"/>
                    </div>
                    <h2>Reset Password</h2>
                    <h2></h2>
                    <input
                        type="email"
                        className="input password w-password-page w-input"
                        autofocus="true"
                        maxlength="256"
                        name="email"
                        data-name="field"
                        placeholder="Enter your email"
                        id="email"
                        required
                        value={resetFormData.email}
                        onChange={handleChange}
                    />
                    <div className="input password w-password-page w-input eyeInput">
                        <input type={passIntype} id="eyeInputField" placeholder="Password" minlength="8" name="password" value={resetFormData.password} onChange={handleChange} required/>
                        <div className="eyeIcon" onClick={togglepassShow} id="eyeIcon">
                        <svg className="style2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                        </svg>
                    </div>
                    </div>
                    <div className="input password w-password-page w-input eyeInput">
                        <input type={cPassintype} placeholder="Confirm your password" id="eyeInputField2" minlength="8" name="cpassword" value={resetFormData.cpassword} onChange={handleChange} required/>
                        <div className="eyeIcon" onClick={togglecpassShow} id="eyeIcon2">
                            <svg className="style2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                            </svg>
                        </div>
                    </div>
                    <input
                        type="submit"
                        value="Register"
                        data-wait="Please wait..."
                        className="button-primary full-width w-password-page w-button"
                        id="senddetails"
                    />
                    <a href="/login"><p></p>Already registered? <u>Login now</u></a>
                </form>
                <div 
                        className={`${showError === 'success' ? 'alert alert-success' : 'alert alert-danger'}`}
                        style={{ display: showError ? 'block' : 'none' }}
                        id="responsehandler"
                    >
                            {passwordMatchErr}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Reset;