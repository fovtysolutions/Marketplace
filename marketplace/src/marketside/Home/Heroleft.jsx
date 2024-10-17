import React,{useState} from 'react';
import { AiOutlineBars } from "react-icons/ai";
import SampleData from '../../VendorSide/data/SampleData.json';
import '../01Style/list.css';

export default function Heroleft() {
  const items = SampleData;
  const [displayCount, setDisplayCount] = useState(8);

  // Create a unique set of categories
  const uniqueCategories = Array.from(new Set(items.map(item => item.category)));

  const handleExpandDisplay = () => {
    setDisplayCount(prevCount => prevCount + 8);
  }

  const handleReduceDisplay = () => {
    setDisplayCount(prevCount => prevCount - 8);
  }
  return (
    <>
        <div className="col-xl-3 col-lg-3 col-md-3 col-12  mb-30">
                <div className="sidebar-border mb-0">
                  <div className="sidebar-head">
                    <h6 className="color-gray-900 d-flex gap-2">
                      <AiOutlineBars /> <span>Categories</span></h6>
                  </div>
                  <div className="sidebar-content">
                    <ul className="category-list">
                      {uniqueCategories.slice(0,displayCount).map((item,index)=>(
                        <li 
                          key = {index}
                          className="category-item">
                          <a href="shop-grid.html"  style={{ all: 'unset'}}>
                          {item}</a>
                        </li>
                      ))}
                      {uniqueCategories.length > displayCount && (
                        <button className='showmore' onClick={handleExpandDisplay}>Show More</button>
                      )}
                      {(uniqueCategories.length > displayCount) && (
                        <button className='showmore' onClick={handleReduceDisplay}>Show Less</button>
                      )}
                    </ul>
                    {/* <div>
                      <div className="collapse" id="moreMenu">
                        <ul className="list-nav-arrow">
                          <li><a href="shop-grid.html">Home theater</a></li>
                          <li><a href="shop-grid.html">Cameras & drones</a></li>
                          <li><a href="shop-grid.html">PC gaming</a></li>
                          <li><a href="shop-grid.html">Smart home</a></li>
                          <li><a href="shop-grid.html">Networking</a></li>
                        </ul>
                      </div><a className="link-see-more mt-5" data-bs-toggle="collapse" href="#moreMenu" role="button" aria-expanded="false" aria-controls="moreMenu">See More</a>
                    </div> */}
                  </div>
                </div>
              </div>
    </>
  )
}

// import React from 'react';
// const Browsejob = () => {
//     return (
//         <>
            
//         </>
//     );
// };

// export default Browsejob;
