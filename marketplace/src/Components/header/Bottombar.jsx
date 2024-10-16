import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import "../../assets/css/StickyBar.css";

export default function Bottombar() {
	return (
		<>
    <div className="bottom-section d-none d-md-block">
  <div className="container-fluid">
    <div className="row align-items-center justify-content-between">
      {/* Left Section - Global Marketplace */}
      <div className="col-lg-2 col-md-3 col-6 mb-3 mb-md-0">
        <div className="left-section d-flex align-items-center">
          <FontAwesomeIcon icon={faFilter} className="me-2" />
          <button className="image-button">Global Marketplace</button>
        </div>
      </div>

      {/* Right Section - Buttons */}
      <div className="col-lg-10 col-md-9 col-12">
        <div className="right-section d-flex justify-content-end">
          <div className="bottom-button-group d-flex flex-wrap">
            <button className="image-button">Agro Tradex</button>
            <button className="image-button">Buy Leads</button>
            <button className="image-button">Sale Offers</button>
            <button className="image-button">Stock Sales</button>
            <button className="image-button">Deal Assist</button>
            <button className="image-button">Trade Shows</button>
            <button className="image-button">RFQ</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    {/* <div className="bottom-section">
     <div className="container-fluid">
      <div className="row">
          <div className="col-md-2 col-6">
            <div className="left-section">
              <FontAwesomeIcon icon={faFilter} />
              <button className="image-button">Global Marketplace</button>
            </div>
          </div>
          <div className="col-md-10 col-6">
            <div className="right-section">
              <div className="bottom-button-group">
                <div>
                  <button className="image-button">Agro Tradex</button>
                  <button className="image-button">Buy Leads</button>
                  <button className="image-button">Sale Offers</button>
                  <button className="image-button">Stock Sales</button>
                  <button className="image-button">Deal Assist</button>
                  <button className="image-button">Trade Shows</button>
                  <button className="image-button">RFQ</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
		</>
	);
}
