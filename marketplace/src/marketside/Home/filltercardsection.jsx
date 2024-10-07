import React from 'react';
const Banner = () => {
    return (
        <>
            <section className="section bg-neutral-100 wf-section">
                <div className="container-default">
                    <div className="filter_heading">
                        <h2>Solving Hiring Problems for Niche Sectors.</h2>
                        <p className="border_line"></p>

                    </div>
                    <div className="filter_cards">
                        <div className="filter_card">
                            <div className="filter_card_content">

                                <h3>
                                    Information Technology
                                </h3>
                                <ul>
                                    <li><a className="searchbyfilterss" href="#">Software Engineering</a></li>
                                    <li><a className="searchbyfilterss" href="#">Cloud Computing & Devops</a></li>
                                    <li><a className="searchbyfilterss" href="#">Data Management</a></li>
                                    <li><a className="searchbyfilterss" href="#">Cyber Security & Infrastructure</a></li>
                                    <li><a className="searchbyfilterss" href="#">Modern Tech (AI, ML, Blockchain, Gaming)</a></li>
                                </ul>
                                <div className="filter_icon_box">
                                    <img src={`${import.meta.env.VITE_IMAGE_URL}gritupp_filter_icon_3.png`} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="filter_card">
                            <div className="filter_card_content">

                                <h3>
                                    Engineering
                                </h3>
                                <ul>
                                    <li><a className="searchbyfilterss" href="#">Semiconductor, Electronics, & Instrumentation</a></li>
                                    <li><a className="searchbyfilterss" href="#">Mechanical & Automation</a></li>
                                    <li><a className="searchbyfilterss" href="#">Civil and Architecture</a></li>
                                    <li><a className="searchbyfilterss" href="#">Biotech</a></li>
                                    <li><a className="searchbyfilterss" href="#">Renewable Energy</a></li>
                                </ul>
                                <div className="filter_icon_box">
                                    <img src={`${import.meta.env.VITE_IMAGE_URL}gritupp_filter_icon_2.png`} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="filter_card">
                            <div className="filter_card_content">

                                <h3>
                                    Business Management
                                </h3>
                                <ul> 
                                    <li><a className="searchbyfilterss" href="#">Leadership Team</a></li>
                                    <li><a className="searchbyfilterss" href="#">Business Development & Sales</a></li>
                                    <li><a className="searchbyfilterss" href="#">Marketing</a></li>
                                    <li><a className="searchbyfilterss" href="#">Human Resources & Administration</a></li>
                                    <li><a className="searchbyfilterss" href="#">Accounting & Finance</a></li>
                                    <li><a className="searchbyfilterss" href="#">Legal</a></li>
                                    <li><a className="searchbyfilterss" href="#">Operation & Supply Chain</a></li>
                                    
                                </ul>
                                <div className="filter_icon_box">
                                    <img src={`${import.meta.env.VITE_IMAGE_URL}gritupp_filter_icon_1.png`} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;
