import React from "react";
import "../assets/css/homecss/style.css";
import "../assets/css/homecss/banner_styling.css";
import "../assets/css/homecss/all.css";
import "./fix.css";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container-default footer-container">
                    <div className="w-layout-grid footer-grid">
                        <div>
                            <div data-w-id="6664d1ce-10c1-caea-a340-642053fcd291" className="w-layout-grid footer-grid-menu">
                                <div>
                                    <h3 className="footer-title menu">About Company</h3>
                                    <div className="_2-menus-footer">
                                    <ul role="list" className="footer-menu-container right-menu">
                                        <li className="footer-link-wrapper">
                                        <a href="/contact" className="footer-link">Contact Us</a>
                                        </li>
                                        <li className="footer-link-wrapper">
                                        <a href="/aboutus" className="footer-link">About Us</a>
                                        </li>
                                        <li className="footer-link-wrapper">
                                        <a href="/privacyandpolicy" className="footer-link">Privacy Policy</a>
                                        </li>
                                        <li className="footer-link-wrapper">
                                        <a href="/termsandcondition" aria-current="page" className="footer-link w--current">Terms and Conditions</a>
                                        </li>
                                        <li className="footer-link-wrapper">
                                        <a href="/refundandcancellation" aria-current="page" className="footer-link w--current">Refund & Cancellation</a>
                                        </li>
                                        <li className="footer-link-wrapper">
                                        <a href="/login" className="footer-link">Login / Register</a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="footer-title menu">For Candidates</h3>
                                    <ul role="list" className="footer-menu-container right-menu">
                                            <li className="footer-link-wrapper">
                                            <a href="./create-resume" className="footer-link">Create Resume</a>
                                            </li>
                                        <li className="footer-link-wrapper">
                                        <a href="./emp-applied-job?savejobs=" className="footer-link">Save Jobs List</a>
                                        </li>
                                        <li className="footer-link-wrapper">
                                        <a href="./emp-browse-jobs" className="footer-link">Browse Jobs</a>
                                        </li>
                                        <li className="footer-link-wrapper">
                                        <a href="./employee-dashboard" className="footer-link">Candidate Dashboard</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="footer-title menu">For Employers</h3>
                                    <ul role="list" className="footer-menu-container right-menu">
                                        <li className="footer-link-wrapper">
                                        <a href="./post_job" className="footer-link">Post A Job</a>
                                        </li>
                                        <li className="footer-link-wrapper">
                                        <a href="./featured_jobs" className="footer-link">Pricing</a>
                                        </li>
                                        <li className="footer-link-wrapper">
                                        <a href="./company-dashboard" className="footer-link">Employer Dashboard</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="fixposition">
                                    <h3 className="footer-title menu">Follow Us</h3>
                                    <ul role="list" className="footer-menu-container right-menu">
                                    <li className="footer-link-wrapper">
                                        <a href="http://facebook.com/" className="social-media-link-footer w-inline-block"><img src="https://assets.website-files.com/5ec5d86528da2f24250d634c/5ec9826823eec548b3182923_facebook.svg" alt="Facebook Icon - " className="social-icon-foote" />
                                        <div>Facebook</div>
                                        </a>
                                    </li>
                                    <li className="footer-link-wrapper">
                                        <a href="http://twitter.com/" className="social-media-link-footer w-inline-block"><img src="https://assets.website-files.com/5ec5d86528da2f24250d634c/5ec98269518a6e6118d567d1_twitter.svg" alt="Twitter - " className="social-icon-foote" />
                                        <div>Twitter</div>
                                        </a>
                                    </li>
                                    <li className="footer-link-wrapper">
                                        <a href="http://instagram.com/" className="social-media-link-footer w-inline-block"><img src="https://assets.website-files.com/5ec5d86528da2f24250d634c/5ec982692fa1e9d0c1a8db49_instagram.svg" alt="Instagram - " className="social-icon-foote" />
                                        <div>Instagram</div>
                                        </a>
                                    </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="text-center">
                                <span>Report a Glitch?</span>
                                <a href="/contact" className="">Gritupp Support</a>
                            </div>
                        </div>
                    </div>
                    <div data-w-id="43672ddb-3571-2ab6-380c-ff151fdf1f14" className="w-layout-grid copyright-grid">
                        <a href="/" className="w-inline-block"><img src={`${import.meta.env.VITE_IMAGE_URL}images/favicon1.png`} alt="Jobs - " className="footer-logo" /></a>
                        <div className="text-block">
                            © Copyright <a className="fixcopyrightcolor">Gritupp and Grow Tech Solution</a> - Developed at
                            <a href="https://designoftime.co.in" target="_blank">Design Of Time Co.</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
