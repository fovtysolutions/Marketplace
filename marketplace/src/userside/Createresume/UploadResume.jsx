import React, { useEffect, useRef, useState } from "react";

const UploadResume = ({showthis=1,slideshow=7,sendDataToParentUpload,errorHandleUpload='success',SavedDataUploaded="notavailable"}) => {
  const fileInputRef = useRef(null);
  const openFile = () => { fileInputRef.current.click();};
  let uniqueID = JSON.parse(sessionStorage.getItem("uid"));
    const initialState = {
      uid: uniqueID[1] || '',
      uploaded: "",
    };
    useEffect(() => {
      if (SavedDataUploaded !== "notavailable" && typeof SavedDataUploaded === 'object') {
        setUploadData({
          uid: uniqueID[1] || '',
          uploaded: SavedDataUploaded.uploaded || '',
        });
      }
    }, [JSON.stringify(SavedDataUploaded), uniqueID[1]]);
    const [allFormData, setUploadData] = useState(initialState);
    const [selectedImage, setSelectedImage] = useState(null);
    const handleChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setSelectedImage(imageUrl);
        setUploadData({ ...allFormData, ['uploaded']: file });
      }
    };
    useEffect(() => {
      sendDataToParentUpload(allFormData);
    }, [allFormData]);

    return (
        <>
          <div id="resumePage" className={`phase-container ${slideshow === 7 ? 'slide-left' : ''}`}  style={{ display: showthis === 1 ? 'block' : 'none' }}>
            <div class="upload-resume-container form-container canwidth"  id="loadingnone">
              <form id="offer-main-form">
                <div class="form-group text-center" onClick={openFile}>
                    <input ref={fileInputRef} type="file"  hidden name="uploaded" id="uploaded" onChange={handleChange} />
                    <div class="upload-resume" id="btn-offer-main">
                      <span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="#000" height="30" width="30" viewBox="0 0 640 512">
                            <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/>
                          </svg>
                      </span>
                        Upload Resume
                      <span class="format">format: pdf, doc, excel, word, txt</span>
                    </div>
                    <div 
                        className={`${errorHandleUpload === 'success' ? '' : 'text-danger'}`}
                        style={{ display: errorHandleUpload === 'success' ? 'none' : 'block' }}
                        id="responsehandler"
                    >
                            { errorHandleUpload === 'success' ? '' : errorHandleUpload.uploaded }
                    </div>
                    </div>
              </form>
            </div>
            <div id="loaderresume" class="loader candisplay"></div>
            <div class="canred" id="alertresume"></div>
          </div>
        </>
    );
};

export default UploadResume;
