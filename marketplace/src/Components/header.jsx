import React, { useEffect, useRef, useState, } from "react";
import { useLocation } from 'react-router-dom';
import Afterlogin from "./afterlogin";
import "./fix.css";

const Header = () => {
    const location = useLocation();
    let sessionSave = JSON.parse(sessionStorage.getItem("uid"));
    if (!sessionSave) {
        sessionSave = "nothing";
    }
    return (
        <>
            <div data-collapse="medium" data-easing="ease" data-easing2="ease" role="banner" className="header w-nav">
                <div className="container-default container-header w-container">
                    <a href="/" className="brand w-nav-brand"><img src={`${import.meta.env.VITE_IMAGE_URL}images/logo.svg`} alt="" className="header-logo" /></a>
                    <div role="navigation" className="nav-menu-container w-nav-menu">
                        <div className="spacer header-mobile"></div>
                        <div className="nav-menu">
                            <ul role="list" className="header-navigation">
                            <li className="nav-item-wrapper">
                                <a href="/" aria-current="page" className={location.pathname === "/"? "nav-link w--current":"nav-link"}>Home</a>
                            </li>
                            <li className="nav-item-wrapper">
                            <a href="/price" aria-current="page" className={location.pathname === "/price"? "nav-link w--current":"nav-link"}>Pricing</a>
                            </li>
                            <li className="nav-item-wrapper">
                                <a href="/blogs" aria-current="page" className={location.pathname === "/blogs"? "nav-link w--current":"nav-link"}>Blog</a>
                            </li>
                            <li className="nav-item-wrapper">
                                <a href="/aboutus" aria-current="page" className={location.pathname === "/aboutus"? "nav-link w--current":"nav-link"}>About Us</a>
                            </li>
                            <li className="nav-item-wrapper">
                                <a href="/contact" aria-current="page" className={location.pathname === "/contact"? "nav-link w--current":"nav-link"}>Contact Us</a>
                            </li>
                            </ul>
                        </div>
                        <div className="_2-buttons-header">
                            <a href="#" className="button-primary-header button-header-primary w-button">Browse Jobs</a>
                            <a href="#" className="button-primary-header button-header-primary w-button">Post a Job</a>
                        </div>
                    </div>
                    <a href="/login" style={{ display: sessionSave === "nothing" ? 'flex' : 'none' }} className="login-btn-header cart-buttno w-inline-block fixstyle1" title="Sign In / Register">
                        <svg className="fixstyle2" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 448 512">
                            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                        </svg>
                        <span className="fixstyle3">Login</span>
                    </a>
                    <Afterlogin
                        userChange = {sessionSave}
                    >
                    </Afterlogin>
                </div>
            </div>
        </>
    );
};

export default Header;
