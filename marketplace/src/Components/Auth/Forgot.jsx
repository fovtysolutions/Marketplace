import React, { useEffect, useRef, useState } from "react";
import useHandleSubmit from '../../hooks/useHandleSubmit';

const Forgot = () => {
    const backend_URL = `${import.meta.env.VITE_BACKEND_URL}forgot`;
    const app_URL = import.meta.env.VITE_APP_URL;
    const initalState = {
        email: "",
        fronturl: "",
    };
    const [forgotFormData, setforgotFormData] = useState(initalState);
    const { hookHandleSubmit, passwordMatchErr, showError } = useHandleSubmit();
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setforgotFormData({ ...forgotFormData, [name]: value });
    };
    useEffect(() => {
        setforgotFormData({ ...forgotFormData, ['fronturl']: app_URL });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        hookHandleSubmit(forgotFormData,backend_URL,'/reset');
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
                            <img
                            src="https://assets.website-files.com/5ec5d86528da2f24250d634c/5ecda3ef4028e0abe32b01b8_icon-password-jobs-template.svg"
                            alt="Password Protected - "
                            className="icon-password"
                            />
                        </div>
                        <h2>Enter Your Email</h2>
                        <input
                            type="text"
                            className="input password w-password-page w-input"
                            autofocus="true"
                            maxlength="256"
                            name="email"
                            data-name="field"
                            placeholder="Enter your email"
                            id="field"
                            required
                            value={forgotFormData.email}
                            onChange={handleChange}
                        />
                        <input type="hidden" name="fronturl" value="" />
                        <input
                            type="submit"
                            value="Submit"
                            data-wait="Please wait..."
                            className="button-primary full-width w-password-page w-button"
                            id="senddetails"
                        />
                        <a href="/candidate/register"><p></p>Not a user? <u>Register now</u></a>
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

export default Forgot;
