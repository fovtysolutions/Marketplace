import React, { useEffect, useRef, useState } from "react";

const Phase4 = ({showthis=5, slideshow=11, SavedDataphase4="notavailable", sendDataToParentP4, errorHandle4='success'}) => {
  if(showthis === 5){
    let uniqueID = JSON.parse(sessionStorage.getItem("uid"));
    const initialState = {
      uid: uniqueID[1] || '',
      linkedin: "",
      github: "",
      youtube: "",
      blog_portf: "",
      other: '',
    };
    const [allFormData, setPhase4Data] = useState(initialState);
    useEffect(() => {
      if (SavedDataphase4 !== "notavailable" && typeof SavedDataphase4 === 'object') {
        setPhase4Data({
          uid: uniqueID[1] || '',
          linkedin: SavedDataphase4.linkedin || '',
          github: SavedDataphase4.github || '',
          youtube: SavedDataphase4.youtube || '',
          blog_portf: SavedDataphase4.blog_portf || '',
          other: SavedDataphase4.other || '',
        });
      }
    }, [JSON.stringify(SavedDataphase4), uniqueID[1]]);

    const handleChange = (e) => { 
      const { name, value } = e.target;
      setPhase4Data({ ...allFormData, [name]: value });
    };

    useEffect(() => {
      sendDataToParentP4(allFormData);
    }, [allFormData]);
    

    return (
        <>
          <div data-w-id="" id="phaseContainer" className="form-container" style={{ display: showthis === 5 ? 'block' : 'none' }}>
            <div className="w-form">
              <div id="phaseFour" className={`phase-container ${slideshow === 11 ? 'slide-left' : ''}`} >
                <form id="phase4form">
                  <div id="job-information" className="w-layout-grid grid-form">
                    <div id="w-node-_2f3c1329-2baa-388a-a287-992dd8acbed2-270281fa">
                      <h2 className="form-subtitle">4. Social Links </h2>
                      <div className="mg-top-8px">
                        <p>
                          Skill based & other social links
                        </p>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="linkedin">Linkedin<span className="color-red">*</span></label>
                        <input 
                          type="url" 
                          className="input w-input" 
                          maxLength="256" 
                          name="linkedin" 
                          placeholder="/linkedin.com/username/"
                          id="linkedin" 
                          required="" 
                          value={allFormData.linkedin}
                          onChange={handleChange}
                        />
                        <div 
                          className={`${errorHandle4 === 'success' ? '' : 'text-danger'}`}
                          style={{ display: errorHandle4 === 'success' ? 'none' : 'block' }}
                          id="responsehandler"
                        >
                                { errorHandle4 === 'success' ? '' : errorHandle4.linkedin }
                        </div>
                    </div>
                    <div>
                      <label htmlFor="github">Github</label>
                        <input 
                          type="url" 
                          className="input w-input" 
                          maxLength="256" 
                          name="github" 
                          placeholder="/github.com/username/"  
                          id="github" 
                          required="" 
                          value={allFormData.github}
                          onChange={handleChange}
                        />
                        <div 
                          className={`${errorHandle4 === 'success' ? '' : 'text-danger'}`}
                          style={{ display: errorHandle4 === 'success' ? 'none' : 'block' }}
                          id="responsehandler"
                        >
                                { errorHandle4 === 'success' ? '' : errorHandle4.github }
                        </div>
                    </div>
                    <div>
                        <label htmlFor="youtube">Youtube</label>
                        <input 
                          type="url" 
                          className="input w-input" 
                          maxLength="256" 
                          name="youtube" 
                          placeholder="/youtube.com/username/" 
                          id="youtube" 
                          required="" 
                          value={allFormData.youtube}
                          onChange={handleChange}
                        />
                        <div 
                          className={`${errorHandle4 === 'success' ? '' : 'text-danger'}`}
                          style={{ display: errorHandle4 === 'success' ? 'none' : 'block' }}
                          id="responsehandler"
                        >
                                { errorHandle4 === 'success' ? '' : errorHandle4.youtube }
                        </div>
                    </div>
                    <div>
                        <label htmlFor="blog_portf">Blog / Portfolio<span></span></label>
                        <input 
                          type="url" 
                          className="input w-input"
                          maxLength="256" 
                          name="blog_portf" 
                          placeholder="/portfolio.com/username/"
                          id="blog_portf" 
                          required="" 
                          value={allFormData.blog_portf}
                          onChange={handleChange}
                        />
                        <div 
                          className={`${errorHandle4 === 'success' ? '' : 'text-danger'}`}
                          style={{ display: errorHandle4 === 'success' ? 'none' : 'block' }}
                          id="responsehandler"
                        >
                                { errorHandle4 === 'success' ? '' : errorHandle4.blog_portf }
                        </div>
                    </div>
                    <div>
                        <label htmlFor="other">Others<span></span></label>
                        <input 
                          type="url" 
                          className="input w-input"
                          maxLength="256" 
                          name="other" 
                          placeholder="/other.com/username/"
                          id="other" 
                          required="" 
                          value={allFormData.other}
                          onChange={handleChange}
                        />
                        <div 
                          className={`${errorHandle4 === 'success' ? '' : 'text-danger'}`}
                          style={{ display: errorHandle4 === 'success' ? 'none' : 'block' }}
                          id="responsehandler"
                        >
                                { errorHandle4 === 'success' ? '' : errorHandle4.other }
                        </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
    );
  }
};

export default Phase4;
