import React, { useEffect, useRef, useState, } from "react";
import { useLocation } from 'react-router-dom';
import Afterlogin from "./afterlogin";
import "./fix.css";
import Topbar from "./header/Topbar";
import Sidebar from "./header/Sidebar";
import Mainheader from "./header/Mainheader";

const Header = () => {
    const location = useLocation();
    let sessionSave = JSON.parse(sessionStorage.getItem("uid"));
    if (!sessionSave) {
        sessionSave = "nothing";
    }
    return (
        <>
            {/* <Topbar/> */}
            {/* <Sidebar/> */}
            <Mainheader/>
        </>
    );
};

export default Header;
