import React, { useEffect, useRef, useState } from "react";
import getData from '../hooks/getData';
import Logout from './Auth/logout';

const afterLogin = ({ userChange }) => {
    const [passIntype, setPassintype] = useState("");
    const togglepassShow = (event) => { event.stopPropagation(); setPassintype(passIntype === "" ? "none" : "");};
    const bodyclick = () => { setPassintype('');};+
    useEffect(() => {
        document.body.addEventListener('click', bodyclick);
        return () => { document.body.removeEventListener('click', bodyclick);};
    }, []);

    const backend_URL = `${import.meta.env.VITE_BACKEND_URL}getusersingle`;
    const initalState = {
        uid: userChange === 'nothing' ? '' : userChange[1],
        userName: userChange === 'nothing' ? '' : userChange[0],
    };
    const [sendData, setgetData] = useState(initalState);
    const { hookHandleData, fetchData, showError } = getData();
    useEffect(() => {
        hookHandleData(sendData, backend_URL);
    }, [sendData, backend_URL]);
    // console.log(`${import.meta.env.VITE_BACKEND_URL}${fetchData.profileimg}`);
    
 
    return (
        <>
            <div className="user-drop-area w-inline-block" id="user-drop-area" style={{ display: userChange === 'nothing' ? 'none' : 'flex' }}>
                <img src={`${import.meta.env.VITE_IMAGE_URL}${fetchData.profileimg}`} onClick={togglepassShow} alt="User Image" className="login-btn-img" />
                <div className="user-dropdown" style={{ display: passIntype === "none" ? 'block' : 'none' }} id="user-dropdown">
                    <div className="user-image">
                        <img src={`${import.meta.env.VITE_IMAGE_URL}${fetchData.profileimg}`} alt="User Image" />
                        <div className="iconnameheade">
                            <span>Hi, {fetchData.username}</span>
                            <span className="iconemailheader">{fetchData.email}</span>
                        </div>
                    </div>
                    <div className="user-links">
                        <a href={userChange[0] === 'candidate' ? 'candidate/dashboard' : 'employer/dashboard' }>Dashboard</a>
                        <Logout/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default afterLogin;
