import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faCog, faSignInAlt, faBars } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <>
    <div className="sticky-top">
				<div className="container-fluid">
					<div className="row">
						<div className="top-section ">
							<div className="col-md-3">
								<div className="logo">
									<img src="../images/template/logo.svg" />
								</div>
							</div>
							<div className="col-md-6">
								<div className="search-bar ">
									<input type="text" placeholder="Search..." />
									<button className="search-button">
										<FontAwesomeIcon icon={faSearch} />
									</button>
								</div>
							</div>
							<div className="col-md-3">
								<div className="button-group">
									<button className="icon-button">
										<div className="icon-text">
											<div className="icon-icon">
												<FontAwesomeIcon icon={faUser} />
											</div>
											<span>Sign In/Join</span>
										</div>
									</button>
									<button className="icon-button">
										<div className="icon-text">
											<div className="icon-icon">
												<FontAwesomeIcon icon={faCog} />
											</div>
											<span>Message</span>
										</div>
									</button>
									<button className="icon-button">
										<div className="icon-text">
											<div className="icon-icon">
												<FontAwesomeIcon icon={faSignInAlt} />
											</div>
											<span>Inquiry Basket</span>
										</div>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
    {/* <div className="sticky-top">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-6 col-md-3">
            <div className="logo">
              <img src="../images/template/logo.svg" alt="Logo" />
            </div>
          </div>


          <div className="d-none d-md-block col-md-6">
            <div className="search-bar">
              <input type="text" placeholder="Search..." />
              <button className="search-button">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>


          <div className="d-none d-md-block col-md-3">
            <div className="button-group">
              <button className="icon-button">
                <div className="icon-text">
                  <FontAwesomeIcon icon={faUser} />
                  <span>Sign In/Join</span>
                </div>
              </button>
              <button className="icon-button">
                <div className="icon-text">
                  <FontAwesomeIcon icon={faCog} />
                  <span>Message</span>
                </div>
              </button>
              <button className="icon-button">
                <div className="icon-text">
                  <FontAwesomeIcon icon={faSignInAlt} />
                  <span>Inquiry Basket</span>
                </div>
              </button>
            </div>
          </div>

          
          <div className="col-6 d-md-none text-end">
            <button
              className="btn btn-primary"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasMenu"
              aria-controls="offcanvasMenu"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </div>


      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasMenu"
        aria-labelledby="offcanvasMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasMenuLabel">Menu</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Sign In/Join</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Message</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Inquiry Basket</a>
            </li>
          </ul>
        </div>
      </div>
    </div> */}
    </>
  );
};

export default Sidebar;

// import React from 'react'
// import { PiMonitorFill } from "react-icons/pi";

// export default function Sidebar() {
//   return (
//     <>
//     <div className="sidebar-left"><a className="btn btn-open" href="#" />
//   <ul className="menu-icons hidden">
//     <li><a href="javascript:void(0)"><PiMonitorFill /></a></li>
//     <li><a href="javascript:void(0)"><img src="assets/imgs/template/mobile.svg" alt="Ecom" /></a></li>
//     <li><a href="#"><img src="assets/imgs/template/game.svg" alt="Ecom" /></a></li>
//     <li><a href="#"><img src="assets/imgs/template/clock.svg" alt="Ecom" /></a></li>
//     <li><a href="#"><img src="assets/imgs/template/airpod.svg" alt="Ecom" /></a></li>
//     <li><a href="#"><img src="assets/imgs/template/airpods.svg" alt="Ecom" /></a></li>
//     <li><a href="#"><img src="assets/imgs/template/mouse.svg" alt="Ecom" /></a></li>
//     <li><a href="#"><img src="assets/imgs/template/music-play.svg" alt="Ecom" /></a></li>
//     <li><a href="#"><img src="assets/imgs/template/bluetooth.svg" alt="Ecom" /></a></li>
//     <li><a href="#"><img src="assets/imgs/template/clound.svg" alt="Ecom" /></a></li>
//     <li><a href="#"><img src="assets/imgs/template/electricity.svg" alt="Ecom" /></a></li>
//     <li><a href="#"><img src="assets/imgs/template/cpu.svg" alt="Ecom" /></a></li>
//     <li><a href="#"><img src="assets/imgs/template/devices.svg" alt="Ecom" /></a></li>
//     <li><a href="#"><img src="assets/imgs/template/driver.svg" alt="Ecom" /></a></li>
//     <li><a href="#"><img src="assets/imgs/template/lamp.svg" alt="Ecom" /></a></li>
//   </ul>
//   <ul className="menu-texts menu-close">
//     <li className="has-children"><a href="shop-grid-2.html"><span className="img-link"><img src="assets/imgs/template/monitor.svg" alt="Ecom" /></span><span className="text-link">Computers &amp; Accessories</span></a>
//       <ul className="sub-menu">
//         <li><a href="shop-grid.html">Computer Accessories</a></li>
//         <li><a href="shop-grid.html">Computer Cases</a></li>
//         <li><a href="shop-grid.html">Laptop</a></li>
//         <li><a href="shop-grid.html">HDD</a></li>
//         <li><a href="shop-grid.html">RAM</a></li>
//         <li><a href="shop-grid.html">Headphone</a></li>
//       </ul>
//     </li>
//     <li className="has-children"><a href="#"><span className="img-link"><img src="assets/imgs/template/mobile.svg" alt="Ecom" /></span><span className="text-link">Cell Phones</span></a>
//       <ul className="sub-menu">
//         <li><a href="shop-grid.html">Phone Accessories</a></li>
//         <li><a href="shop-grid.html">Phone Cases</a></li>
//         <li><a href="shop-grid.html">Postpaid Phones</a></li>
//         <li><a href="shop-grid.html">Unlocked Phones</a></li>
//         <li><a href="shop-grid.html">Prepaid Phones</a></li>
//         <li><a href="shop-grid.html">Prepaid Plans</a></li>
//         <li><a href="shop-grid.html">Refurbished Phones</a></li>
//         <li><a href="shop-grid.html">Straight Talk</a></li>
//         <li><a href="shop-grid.html">iPhone</a></li>
//         <li><a href="shop-grid.html">Samsung Galaxy</a></li>
//         <li><a href="shop-grid.html">Samsung Galaxy</a></li>
//         <li><a href="shop-grid.html">Samsung Galaxy</a></li>
//         <li><a href="shop-grid.html">Samsung Galaxy</a></li>
//         <li><a href="shop-grid.html">Samsung Galaxy</a></li>
//       </ul>
//     </li>
//     <li className="has-children"><a href="shop-grid.html"><span className="img-link"><img src="assets/imgs/template/game.svg" alt="Ecom" /></span><span className="text-link">Gaming Gatgets</span></a>
//       <ul className="sub-menu">
//         <li><a href="shop-grid.html">Wireless Routers</a></li>
//         <li><a href="shop-grid.html">Cool New Gadgets</a></li>
//         <li><a href="shop-grid.html">Tech and Gadgets</a></li>  
//         <li><a href="shop-grid.html">Geek Gifts and Gadgets</a></li>
//         <li><a href="shop-grid.html">Xbox Accessories</a></li>
//         <li><a href="shop-grid.html">PlayStation Accessories</a></li>
//       </ul>
//     </li>
//     <li className="has-children"><a href="shop-grid.html"><span className="img-link"><img src="assets/imgs/template/clock.svg" alt="Ecom" /></span><span className="text-link">Smart watches</span></a>
//       <ul className="sub-menu">
//         <li><a href="shop-grid.html">Smart Watches</a></li>
//         <li><a href="shop-grid.html">Fashion Smart Watches</a></li>
//         <li><a href="shop-grid.html">Smart Bracelets</a></li>
//         <li><a href="shop-grid.html">Pocket Watches</a></li>
//         <li><a href="shop-grid.html">Smart Rings</a></li>
//         <li><a href="shop-grid.html">Other Watches</a></li>
//       </ul>
//     </li>
//     <li className="has-children"><a href="shop-grid.html"><span className="img-link"><img src="assets/imgs/template/airpods.svg" alt="Ecom" /></span><span className="text-link">Wired Headphone</span></a>
//       <ul className="sub-menu">
//         <li><a href="shop-grid.html">On-Ear Headphones</a></li>
//         <li><a href="shop-grid.html">Earbud &amp; In-Ear</a></li>
//         <li><a href="shop-grid.html">DJ Headphones</a></li>
//         <li><a href="shop-grid.html">PC Accessories</a></li>
//         <li><a href="shop-grid.html">PC Game Headsets</a></li>
//       </ul>
//     </li>
//     <li className="has-children"><a href="shop-grid.html"><span className="img-link"><img src="assets/imgs/template/mouse.svg" alt="Ecom" /></span><span className="text-link">Mouse &amp; Keyboard</span></a>
//       <ul className="sub-menu">
//         <li><a href="shop-grid.html">Logitech</a></li>
//         <li><a href="shop-grid.html">Redragon</a></li>
//         <li><a href="shop-grid.html">Amazon Basics</a></li>
//         <li><a href="shop-grid.html">Microsoft</a></li>
//         <li><a href="shop-grid.html">MageGee</a></li>
//       </ul>
//     </li>
//     <li className="has-children"><a href="shop-grid.html"><span className="img-link"><img src="assets/imgs/template/music-play.svg" alt="Ecom" /></span><span className="text-link">Headphone</span></a>
//       <ul className="sub-menu">
//         <li><a href="shop-grid.html">Car Audio Systems</a></li>
//         <li><a href="shop-grid.html">Cellphones</a></li>
//         <li><a href="shop-grid.html">Desktops</a></li>
//         <li><a href="shop-grid.html">Gaming Consoles</a></li>
//         <li><a href="shop-grid.html">Telephones</a></li>
//       </ul>
//     </li>
//     <li className="has-children"><a href="shop-grid.html"><span className="img-link"><img src="assets/imgs/template/bluetooth.svg" alt="Ecom" /></span><span className="text-link">Bluetooth devices</span></a>
//       <ul className="sub-menu">
//         <li><a href="shop-grid.html">Player Accessories</a></li>
//         <li><a href="shop-grid.html">Computer Accessories</a></li>
//         <li><a href="shop-grid.html">Speakers &amp; Audio</a></li>
//         <li><a href="shop-grid.html">Computer Networking</a></li>
//         <li><a href="shop-grid.html">Movies &amp; Films</a></li>
//       </ul>
//     </li>
//     <li className="has-children"><a href="shop-grid.html"><span className="img-link"><img src="assets/imgs/template/clound.svg" alt="Ecom" /></span><span className="text-link">Cloud Software</span></a>
//       <ul className="sub-menu">
//         <li><a href="shop-grid.html">Android</a></li>
//         <li><a href="shop-grid.html">Linux &amp; Unix</a></li>
//         <li><a href="shop-grid.html">Macintosh</a></li>
//         <li><a href="shop-grid.html">Windows</a></li>
//         <li><a href="shop-grid.html">iPhone &amp; iOS</a></li>
//       </ul>
//     </li>
//     <li className="has-children"><a href="shop-grid.html"><span className="img-link"><img src="assets/imgs/template/electricity.svg" alt="Ecom" /></span><span className="text-link">Electric accessories</span></a>
//       <ul className="sub-menu">
//         <li><a href="shop-grid.html">Antenna Toppers</a></li>
//         <li><a href="shop-grid.html">Automotive Body Armor</a></li>
//         <li><a href="shop-grid.html">Power Inverter</a></li>
//         <li><a href="shop-grid.html">Gas Tank Doors</a></li>
//         <li><a href="shop-grid.html">Hood Scoops &amp; Vents</a></li>
//       </ul>
//     </li>
//     <li className="has-children"><a href="shop-grid.html"><span className="img-link"><img src="assets/imgs/template/cpu.svg" alt="Ecom" /></span><span className="text-link">Mainboard &amp; CPU</span></a>
//       <ul className="sub-menu">
//         <li><a href="shop-grid.html">Computer CPU Processors</a></li>
//         <li><a href="shop-grid.html">Internal Fans &amp; Cooling</a></li>
//         <li><a href="shop-grid.html">Graphics Cards</a></li>
//         <li><a href="shop-grid.html">Network I/O Port Cards</a></li>
//         <li><a href="shop-grid.html">Internal Memory Card</a></li>
//       </ul>
//     </li>
//     <li className="has-children"><a href="shop-grid.html"><span className="img-link"><img src="assets/imgs/template/devices.svg" alt="Ecom" /></span><span className="text-link">Desktop PC</span></a>
//       <ul className="sub-menu">
//         <li><a href="shop-grid.html">Graphic PC</a></li>
//         <li><a href="shop-grid.html">Office PC</a></li>
//         <li><a href="shop-grid.html">Gaming PC</a></li>
//         <li><a href="shop-grid.html">Server</a></li>
//       </ul>
//     </li>
//     <li className="has-children"><a href="shop-grid.html"><span className="img-link"><img src="assets/imgs/template/driver.svg" alt="Ecom" /></span><span className="text-link">Speaker</span></a>
//       <ul className="sub-menu">
//         <li><a href="shop-grid.html">JBL</a></li>
//         <li><a href="shop-grid.html">Anker</a></li>
//         <li><a href="shop-grid.html">Pyle</a></li>
//         <li><a href="shop-grid.html">Bose</a></li>
//         <li><a href="shop-grid.html">Logitech</a></li>
//       </ul>
//     </li>
//     <li className="has-children"><a href="shop-grid.html"><span className="img-link"><img src="assets/imgs/template/airpod.svg" alt="Ecom" /></span><span className="text-link">Bluetooth Headphone</span></a>
//       <ul className="sub-menu">
//         <li><a href="shop-grid.html">On-Ear Headphones</a></li>
//         <li><a href="shop-grid.html">In-Ear Headphones</a></li>
//         <li><a href="shop-grid.html">Earbud</a></li>
//         <li><a href="shop-grid.html">Over-Ear Headphones</a></li>
//         <li><a href="shop-grid.html">Other</a></li>
//       </ul>
//     </li>
//     <li className="has-children"><a href="shop-grid.html"><span className="img-link"><img src="assets/imgs/template/lamp.svg" alt="Ecom" /></span><span className="text-link">Computer Decor</span></a>
//       <ul className="sub-menu">
//         <li><a href="shop-grid.html">Copyholders</a></li>
//         <li><a href="shop-grid.html">Office Bookends</a></li>
//         <li><a href="shop-grid.html">Business Card Holders</a></li>
//         <li><a href="shop-grid.html">Lap Desks</a></li>
//         <li><a href="shop-grid.html">Mouse Pads</a></li>
//       </ul>
//     </li>
//   </ul>
// </div>

//     </>
//   )
// }
