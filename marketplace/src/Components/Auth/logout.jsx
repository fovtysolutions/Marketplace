import React, { useEffect, useRef, useState } from "react";
import getUserData from '../../hooks/getData';

const Logout = () => {
    const backend_URL = `${import.meta.env.VITE_BACKEND_URL}logout`;
    const initalState = {
        userName: '',
    };
    const [sendUserData] = useState(initalState);
    const {hookHandleData} = getUserData();
    const handleLogout = () => {
        hookHandleData(sendUserData, backend_URL);
        sessionStorage.removeItem('uid');
        location.href = "/login";
    };
    
    return (
        <>
            <a onClick={handleLogout} >Log Out</a>
        </>
    );
};

export default Logout;
