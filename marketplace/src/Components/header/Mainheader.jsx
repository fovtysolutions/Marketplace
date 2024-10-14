import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faUser, faCog, faSignInAlt, faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';
import "../../assets/css/StickyBar.css";

export default function Mainheader() {
	return (
		<>
			<div className="navbar">
				<div className="top-section">
					<div className="logo"><img src="../images/template/logo.svg" /></div>
					<div className="search-bar">
						<input type="text" placeholder="Search..." />
						<button className="search-button">
							<FontAwesomeIcon icon={faSearch} />
						</button>
					</div>
					<div className="button-group">
						<button className="icon-button">
							<div className="icon-text">
							<div className="icon-icon"><FontAwesomeIcon icon={faUser} /></div>
								<span>Sign In/Join</span>
							</div>
						</button>
						<button className="icon-button">
							<div className="icon-text">
							<div className="icon-icon"><FontAwesomeIcon icon={faCog} /></div>
								<span>Message</span>
							</div>
						</button>
						<button className="icon-button">
							<div className="icon-text">
								<div className="icon-icon"><FontAwesomeIcon icon={faSignInAlt} /></div>
								<span>Inquiry Basket</span>
							</div>
						</button>
					</div>
				</div>
				<div className="boundary"></div>
				<div className="bottom-section">
					<div className="left-section">
						<FontAwesomeIcon icon={faFilter} />
						<button className="image-button">Global Marketplace</button>
					</div>
					<div className="right-section">
						<div className="bottom-button-group">
							<button class="image-button">Agro Tradex</button>
							<button class="image-button">Buy Leads</button>
							<button class="image-button">Sale Offers</button>
							<button class="image-button">Stock Sales</button>
							<button class="image-button">Deal Assist</button>
							<button class="image-button">Trade Shows</button>
							<button class="image-button">RFQ</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
