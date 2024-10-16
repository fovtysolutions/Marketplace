import React from 'react';
import { AiOutlineBars } from "react-icons/ai";
import '../01Style/list.css';

export default function Heroleft() {
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
                      <li className="category-item"><a href="shop-grid.html"  style={{ all: 'unset'}}>Agriculture</a></li>
                      <li className="category-item"><a href="shop-grid.html"  style={{ all: 'unset'}}>Building Construction</a></li>
                      <li className="category-item"><a href="shop-grid.html"  style={{ all: 'unset'}}>Electrical Equipment</a></li>
                      <li className="category-item"><a href="shop-grid.html"  style={{ all: 'unset'}}>Apparel & Accessories </a></li>
                      <li className="category-item"><a href="shop-grid.html"  style={{ all: 'unset'}}>Automobile & Motorcycles</a></li>
                      <li className="category-item"><a href="shop-grid.html"  style={{ all: 'unset'}}>Beauty</a></li>
                      <li className="category-item"><a href="shop-grid.html"  style={{ all: 'unset'}}>Personal Care</a></li>
                      <li className="category-item"><a href="shop-grid.html"  style={{ all: 'unset'}}>Chemicals</a></li>
                      <li className="category-item"><a href="shop-grid.html"  style={{ all: 'unset'}}>More Categories</a></li>
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
