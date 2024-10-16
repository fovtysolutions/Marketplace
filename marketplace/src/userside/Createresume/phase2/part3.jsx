import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import certificationData from '../../../hooks/getData';

const Partthree = ({formID, certification}) => {
    const [formData, setFormData] = useState({
        title: '',
        org: '',
        year: '',
    });
    const [certifications, setCertifications] = useState(certification);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const getAllphaseData = (certific) => {
        const initialState = {
            certificate: JSON.stringify(certific),
        };
        const backend_URLDetails = `${import.meta.env.VITE_BACKEND_URL}getCertificate/${formID}`;
        hookHandleData(initialState, backend_URLDetails);
    };
    const handleAddCertification = () => {
        if (formData.title && formData.org && formData.year) {
            setCertifications((prevCerts) => {
                const updatedCerts = [...prevCerts, formData];
                getAllphaseData(updatedCerts);
                return updatedCerts;
            });
            setFormData({ title: '', org: '', year: '' }); 
        } else {
            alert('Please fill all fields before adding.');
        }
    };
    const handleDeleteCertification = (index) => {
        setCertifications((prevCerts) => {
            const updatedCerts = prevCerts.filter((_, i) => i !== index);
            getAllphaseData(updatedCerts);
            return updatedCerts;
        });
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); 
            handleAddCertification(); 
        }
    };
    const { hookHandleData, fetchData } = certificationData(); 
    
    
    return (
        <>
            <div id="w-node-_11ff66e2-bb63-3205-39c9-a48a569518d9-270281fa" className="input-container-full-width addvaluecer">
                <h3>Certification:</h3>
                <ul className="canphase2padding">
                    <li className="certificateRow">
                        <div>
                            <span>Title</span>
                            <input type="text" placeholder="Title" name="title" className="valueadd1" id="valueblank1" value={formData.title} onChange={handleInputChange} onKeyDown={handleKeyDown} />
                        </div>
                        <div>
                            <span>Organization</span>
                            <input type="text" placeholder="Organization" name="org" className="valueadd2" id="valueblank2" value={formData.org} onChange={handleInputChange} onKeyDown={handleKeyDown} />
                        </div>
                        <div>
                            <span>Year</span>
                            <input type="text" placeholder="Year" className="valueadd3" name="year" id="valueblank3" value={formData.year} onChange={handleInputChange} onKeyDown={handleKeyDown}/>
                        </div>
                        <span className="cervalue canphase2" onClick={handleAddCertification}>Add</span>
                    </li>
                </ul>
            </div>
            <div id="w-node-_11ff66e2-bb63-3205-39c9-a48a569518d9-270281fa" className="input-container-full-width">
                <ul className="certification_tags canphase2padding">
                    {certifications.map((cert, index) => (
                        <li className="certificateRow"  key={index} >
                            <div>
                                <span>Title</span>
                                <input className="no-hover-caret" type="text" value={cert.title} placeholder="Title" readOnly /> 
                            </div>
                            <div>
                                <span>Organization</span>
                                <input className="no-hover-caret" type="text" value={cert.title} placeholder="Organization" readOnly />
                            </div>
                            <div>
                                <span>Year</span>
                                <input className="no-hover-caret" type="text" value={cert.title} placeholder="Year" readOnly /> 
                            </div>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                height="50" 
                                width="50" 
                                viewBox="0 0 384 512" 
                                id="remove-skill" 
                                className="button-remove<?=$valuecountjs?>" 
                                onClick={() => handleDeleteCertification(index)}
                            >
                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Partthree;
