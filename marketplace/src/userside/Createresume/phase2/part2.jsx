import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import multipleFilesData from '../../../hooks/getData';
import getDataAgain from '../../../hooks/getData2';

const Parttwo = ({formID, fileProject}) => {
  const [mejorFiles, setMejorFiles] = useState(fileProject);
  const { hookHandleData, fetchData } = multipleFilesData();
  const { hookHandleData2, fetchData2 } = getDataAgain();
  const backend_URLDetails = `${import.meta.env.VITE_BACKEND_URL}getProjectFiles/${formID}`;

  const getAllphaseData = (files, removefiles) => {
    if (files) {
      return hookHandleData(files, backend_URLDetails);
    }
    if (removefiles) {
      const initialState = {
        majorFile: JSON.stringify(removefiles),
      };
      hookHandleData(initialState, backend_URLDetails);
    }
  };

  const handleFileChange = (e) => {
    const formData = new FormData();
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      formData.append('files[]', file);
    });
    getAllphaseData(formData, '')
      .then(() => {
        const initialState = {
          returnss: "returns",
        };
        hookHandleData2(initialState, backend_URLDetails)
      })
      .catch((error) => {
        console.error('Error fetching files:', error);
      });
  };
  const handleDeleteFile = (index) => {
    setMejorFiles((prevFiles) => {
      const updatedFiles = prevFiles.filter((_, i) => i !== index);
      getAllphaseData('', updatedFiles);
      return updatedFiles;
    });
  };

  useEffect(() => {
    try {
      const parsedfetchData2 = JSON.parse(fetchData2);
      setMejorFiles(parsedfetchData2); 
      // console.log(parsedfetchData2); 
    } catch (error) {
      console.log('return data');
    }
  }, [fetchData2]);



    return (
        <>
            <div>
                <label htmlFor="major_minor_pro">Major Project / Minor Project </label>
                <input
                    type="file"
                    multiple
                    className="input w-input"
                    name="major_minor_pro"
                    placeholder="Please click here to change picture"
                    id="major_minor_pro"
                    onChange={handleFileChange}
                />
                <div className="small-images" id="small_images">
                    {mejorFiles.map((fileObj, index) => (
                        <div className="individual-img canphase2relative" id="imageContainer" key={index}>
                        <img
                            src={`${import.meta.env.VITE_IMAGE_URL}/uploads/major_project/${fileObj}`}
                            alt={fileObj}
                            width="50px"
                            style={{ marginRight: "10px" }}
                        />
                            <svg onClick={() => handleDeleteFile(index)} className="cancel-icon" id="remove_image" xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512">
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                            </svg>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Parttwo;
