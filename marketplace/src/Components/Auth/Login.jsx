import React, { useEffect, useRef, useState } from "react";
import useHandleSubmit from '../../hooks/useHandleSubmit';

const Login = () => {
    const [passIntype, setPassintype] = useState("password");
    const [changeUser, setChangeuser] = useState("");
    const togglepassShow = () => { setPassintype(prevType => (prevType === "password" ? "text" : "password"));};
    const candidateChange = () => { setChangeuser('candidate');};
    const employerChange = () => { setChangeuser('employer');};
    const urlchange = changeUser === "employer" ? 'employer' : 'candidate';

    const backend_URL = `${import.meta.env.VITE_BACKEND_URL}login`;
    const initalState = {
        email: "",
        password: "",
        userface: "",
    };
    const [loginFormData, setloginFormData] = useState(initalState);
    const { hookHandleSubmit, passwordMatchErr, showError , showSuccess } = useHandleSubmit();
    
    useEffect(() => {
        setloginFormData({ ...loginFormData, ['userface']: changeUser === "employer" ? 'employer' : 'candidate' });
    }, [changeUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setloginFormData({ ...loginFormData, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        hookHandleSubmit(loginFormData,backend_URL,`/${urlchange}/dashboard`);
    }
    if (showError === 'success'){
        const userCheck = changeUser === "employer" ? 'employer' : 'candidate';
        const sessionSave = [userCheck,showSuccess];
        sessionStorage.setItem("uid", JSON.stringify(sessionSave));
    }

    return (
        <>
            <div className="utility-page-wrap pagewrap">
                <div
                    data-w-id="5e86ada79942c1e4247fd4c700000000000b"
                    className="utility-page-content-password w-password-page w-form opacityset"
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
                        <h2>Login</h2>
                        <div className="_2-buttons-wrapper style1">
                            <div className="button-spacer">
                                <a onClick={candidateChange} className={`full-width-mobile w-button ${changeUser === "employer" ? 'button-secondary' : 'button-primary'}`}>Candidate</a>
                            </div>
                            <a onClick={employerChange} className={`full-width-mobile w-button ${changeUser === "employer" ? 'button-primary' : 'button-secondary'}`}>Employer</a>
                            {/* <a onClick={employerChange} className="button-secondary full-width-mobile w-button">Employer</a> */}
                        </div>
                        <input
                            type="text"
                            className="input password w-password-page w-input"
                            autoFocus={true}
                            maxLength="256"
                            name="email"
                            data-name="field"
                            placeholder={changeUser === "employer" ? 'Enter your company email' : 'Enter your username or email'}
                            id="email"
                            required
                            value={loginFormData.email}
                            onChange={handleChange}
                        />
                        <div className="input password w-password-page w-input eyeInput">
                            <input type={passIntype} id="eyeInputField" placeholder="Password" name="password" minLength="8" value={loginFormData.password} onChange={handleChange}/>
                            <div className="eyeIcon" onClick={togglepassShow} id="eyeIcon">
                                <svg className="style2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                    <path
                                    d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                                </svg>
                            </div>
                        </div>
                        <input
                            type="submit"
                            value="Submit"
                            data-wait="Please wait..."
                            className="button-primary full-width w-password-page w-button"
                            id="senddetails"
                        />
                        <div className="text-center style3" style={{ display: changeUser === "employer" ? 'none' : 'inline-block' }}>
                            <a type="button" href="assets/php/Login/entryphp/google-oauth.php"
                            className="button-primary full-width w-password-page w-button form-control" value="Custome Plan"
                            id="googlebtn">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="googleIcon">
                                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                                </svg>Sign In With Google
                            </a>
                        </div>
                        <div  className="w-password-page w-embed w-script stylenone"></div>
                        <a href={changeUser === "employer" ? '/employer/register' : '/candidate/register'} id="registerlink"><p></p>Not a user? <u>Register now</u></a>
                        <a href="/forgot"><p></p>Forgot Password? <u>Click Here</u></a>
                        <input type="hidden" name="userface" id="userface" value={changeUser === "employer" ? 'employer' : 'candidate'} />
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

export default Login;
