import React from "react";
// import {
// 	FaFacebookF,
// 	FaInstagram,
// 	FaTwitter,
// 	FaLinkedinIn,
// } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import "../assets/css/Footer.css";

const Footer = () => {
	return (
		<>
			<footer className="footer">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12 col-md-3">
							<div className="mb-3">
								<h4 className="mb-2 title-m">Discover Products & Suppliers</h4>
								<ul className="menu-footer">
									<li className="mb-1">
										<a href="#">Industry Sites</a>
									</li>
									<li className="mb-1">
										<a href="#">Regional Channels</a>
									</li>
									<li className="mb-1">
										<a href="#">Special Channel</a>
									</li>
									<li className="mb-1">
										<a href="#">Custom Products</a>
									</li>
									<li className="mb-1">
										<a href="#">Video Show</a>
									</li>
									<li className="mb-1">
										<a href="#">Secured Trading Service</a>
									</li>
									<li className="mb-1">
										<a href="#">Business Guide</a>
									</li>
								</ul>
							</div>
							<h4 className="mb-2 title-m">Featured Service</h4>
							<ul className="menu-footer">
								<li className="mb-1">
									<a href="#">Star Buyer</a>
								</li>
								<li className="mb-1">
									<a href="#">Trade Resources</a>
								</li>
								<li className="mb-1">
									<a href="#">Logistics Partners</a>
								</li>
							</ul>
						</div>
						<div className="col-12 col-md-3">
							<div className="mb-3">
								<h4 className="mb-2 title-m">About Us</h4>
								<ul className="menu-footer">
									<li className="mb-1">
										<a href="#">About Made-in-China.com</a>
									</li>
									<li className="mb-1">
										<a href="#">Site Map</a>
									</li>
									<li className="mb-1">
										<a href="#">Trademark</a>
									</li>
									<li className="mb-1">
										<a href="#">Friendly Links</a>
									</li>
								</ul>
							</div>
							<h4 className="mb-2 title-m">Help</h4>
							<ul className="menu-footer">
								<li className="mb-1">
									<a href="#">FAQ</a>
								</li>
								<li className="mb-1">
									<a href="#">Contact Us</a>
								</li>
								<li className="mb-1">
									<a href="#">加入高级会员</a>
								</li>
								<li className="mb-1">
									<a href="#">Submit a Complaint</a>
								</li>
							</ul>
						</div>
						<div className="col-12 col-md-3">
							<div className="mb-3">
								<h4 className="mb-2 title-m">Language Options</h4>
								<div className="d-flex">
									<div className="col-6">
										<ul className="menu-footer">
											<li className="mb-1">
												<a href="#">Español</a>
											</li>
											<li className="mb-1">
												<a href="#">Português</a>
											</li>
											<li className="mb-1">
												<a href="#">Français</a>
											</li>
											<li className="mb-1">
												<a href="#">Русский язык</a>
											</li>
											<li className="mb-1">
												<a href="#">Italiano</a>
											</li>
											<li className="mb-1">
												<a href="#">Deutsch</a>
											</li>
											<li className="mb-1">
												<a href="#">Nederlands</a>
											</li>
											<li className="mb-1">
												<a href="#">العربية</a>
											</li>
											<li className="mb-1">
												<a href="#">한국어</a>
											</li>
											<li className="mb-1">
												<a href="#">日本語</a>
											</li>
										</ul>
									</div>
									<div className="col-6">
										<ul className="menu-footer">
											<li className="mb-1">
												<a href="#">हिन्दी</a>
											</li>
											<li className="mb-1">
												<a href="#">ภาษาไทย</a>
											</li>
											<li className="mb-1">
												<a href="#">Türkçe</a>
											</li>
											<li className="mb-1">
												<a href="#">Tiếng Việt</a>
											</li>
											<li className="mb-1">
												<a href="#">Bahasa Indonesia</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-3">
							<div className="mb-3">
								{/* <img src="../images/mp/f-4.png" alt="market place" /> */}
								<div className="footer-4-cnt">
									<div className="f-4-title">
										<a href="#"></a>
									</div>
									<div className="sub-cnt">
										<div className="sub-title">Co-brands </div>
									</div>
									<div className="brand-1">
										<a href="#"></a>
									</div>
									<div className="brand-2">
										<a href="#"></a>
									</div>
									<div className="brand-3">
										<a href="#"></a>
									</div>
									<div className="brand-4">
										<a href="#"></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="col-md-4 col-12">
						<div className="footer-app">
							<span>Free App:</span>
							<a href="#" className="f-apple-store">
								<FaApple />
								App Store
							</a>
							<a href="#" className="f-android-store">
								<DiAndroid />
								Google Play
							</a>
						</div>
					</div>
					<div className="col-md-4 col-12"></div>
					<div className="col-md-4 col-12"></div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
