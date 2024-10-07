import React from 'react';
const Problemsolvingsection = () => {
    return (
        <>
            <div id="target" className="content hiddenDiv">
                <div className="title">
                    <h2>Gritupp's guide for solution to your hiring problems</h2>
                    <p className="border_line"></p>
                </div>
                <div className="p_s_section" id="p_s_section stylenone">
                    <img src={`${import.meta.env.VITE_IMAGE_URL}p-s-section/1.svg`} alt="" className="section_image_1"/>
                    <img src={`${import.meta.env.VITE_IMAGE_URL}p-s-section/2.svg`} alt="" className="section_image_2"/>
                    <img src={`${import.meta.env.VITE_IMAGE_URL}p-s-section/3.svg`} alt="" className="section_image_3"/>
                    <img src={`${import.meta.env.VITE_IMAGE_URL}p-s-section/4.svg`} alt="" className="section_image_4"/>
                    <img src={`${import.meta.env.VITE_IMAGE_URL}p-s-section/5.svg`} alt="" className="section_image_5"/>
                    <img src={`${import.meta.env.VITE_IMAGE_URL}p-s-section/6.svg`} alt="" className="section_image_6"/>
                </div>
            </div>
        </>
    );
};

export default Problemsolvingsection;
