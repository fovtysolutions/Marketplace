import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import SkillsData from '../../../hooks/getData';

const Parttwo = ({formID, Skills}) => {
    const [formData, setFormData] = useState({
        skills: '',
    });
    const [Skillss, setSkillss] = useState(Skills);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const getAllphaseData = (skill) => {
        const initialState = {
            allSkills: JSON.stringify(skill),
        };
        const backend_URLDetails = `${import.meta.env.VITE_BACKEND_URL}getallSkills/${formID}`;
        hookHandleData(initialState, backend_URLDetails);
    };
    const handleAddSkills = () => {
        if (formData.skills) {
            setSkillss((prevCerts) => {
                const updatedSkills = [...prevCerts, formData];
                getAllphaseData(updatedSkills);
                return updatedSkills;
            });
            setFormData({ skills: ''}); 
        } else {
            alert('Please fill all fields before adding.');
        }
    };
    const handleDeleteSkills = (index) => {
        setSkillss((prevCerts) => {
            const updatedSkills = prevCerts.filter((_, i) => i !== index);
            getAllphaseData(updatedSkills);
            return updatedSkills;
        });
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); 
            handleAddSkills(); 
        }
    };
    const { hookHandleData, fetchData } = SkillsData(); 
    
    
    return (
        <>
          <div>
            <label for="skill-input">Skills<span></span></label>
            <input 
              type="text" 
              class="input w-input skillvalue" 
              maxlength="256" 
              name="skills" 
              data-name="Name" 
              placeholder="ex: Excel, Photoshop" 
              id="skill-input" 
              value={formData.skills} 
              onChange={handleInputChange} 
              onKeyDown={handleKeyDown}
            />
          </div>
          <div>
            <span class="canphase3Skills"></span>
          </div>
          <div class="addvalueskill w-100 flex justify-content-end canphase2Skillbtn">
            <span class="skillvalueclick button-primary canphase2Skill2btn" onClick={handleAddSkills}>Add</span>
          </div>
          <div id="w-node-_11ff66e2-bb63-3205-39c9-a48a569518d9-270281fa" class="input-container-full-width">
            <p>SKILLS:</p>
            <ul class="all_skill_tags canphase3SkillsDisplay skill-tags">
              {Skillss.map((cert, index) => ( 
                <li>
                  <input class="skill-tag-input canphase3skillHeight" type="text" name="all_skill" value={cert.skills}  disabled />
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    height="15" 
                    width="10" 
                    viewBox="0 0 384 512" 
                    id="remove-skill"
                    class="skill-remove"
                    onClick={() => handleDeleteSkills(index)}
                  >
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                  </svg>
                </li>
              ))}
            </ul>
          </div>
        </>
    );
};

export default Parttwo;
