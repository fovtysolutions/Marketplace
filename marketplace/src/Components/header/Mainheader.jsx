import React from "react";
import { FaBars } from "react-icons/fa";
import { BiSolidShoppingBags } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";

export default function Mainheader() {
	return (
		<>
			<header className="header sticky-bar">
				<div className="container">
					<div className="row">
						<div className="main-header">
							<div className="header-nav">
								<nav className="nav-main-menu">
									<div className="dropdown-mp">
										<button className="dropbtn-mp d-flex gap-2 align-items-center">
											<FaBars />
											<span>Categories</span>
										</button>
										<div className="dropdown-content-mp">
											<div className="row">
												<div className="column">
													<h3>Category 1</h3>
													<a href="#">Link 1</a>
													<a href="#">Link 2</a>
													<a href="#">Link 3</a>
												</div>
												<div className="column">
													<h3>Category 2</h3>
													<a href="#">Link 1</a>
													<a href="#">Link 2</a>
													<a href="#">Link 3</a>
												</div>
												<div className="column">
													<h3>Category 3</h3>
													<a href="#">Link 1</a>
													<a href="#">Link 2</a>
													<a href="#">Link 3</a>
												</div>
											</div>
										</div>
									</div>
									<div className="nav-main-menu-btn">
										<a href="#" className="d-flex gap-2 align-items-center">
											<BiSolidShoppingBags />
											<span>Online Exhibition</span>
										</a>
									</div>
								</nav>
								<div className="burger-icon burger-icon-white">
									<span className="burger-icon-top" />
									<span className="burger-icon-mid" />
									<span className="burger-icon-bottom" />
								</div>
							</div>
							<div className="header-center">
								<div className="d-flex align-items-center flex-column gap-3 header-center-1">
									<div className="header-logo">
										<a className="d-flex" href="index.html">
											<img alt="Ecom" src="../images/template/logo.svg" />
										</a>
									</div>
									<div className="header-search">
										<div className="box-header-search">
											<form className="form-search" method="post" action="#">
												<div className="box-category">
													<select className="select-active select2-hidden-accessible">
														<option>All categories</option>
														<option value="Computers Accessories">
															Computers Accessories
														</option>
														<option value="Cell Phones">Cell Phones</option>
														<option value="Gaming Gatgets">
															Gaming Gatgets
														</option>
														<option value="Smart watches">Smart watches</option>
														<option value="Wired Headphone">
															Wired Headphone
														</option>
														<option value="Mouse & Keyboard">
															Mouse Keyboard
														</option>
														<option value="Headphone">Headphone</option>
														<option value="Bluetooth devices">
															Bluetooth devices
														</option>
														<option value="Cloud Software">
															Cloud Software
														</option>
													</select>
												</div>
												<div className="box-keysearch">
													{/* <input
													className="form-control font-xs"
													type="text"
													defaultValue
													placeholder="Search for items"
												/> */}
													<input
														className="form-control font-xs"
														type="text"
														placeholder="Search for items"
													/>
													<IoSearch />
												</div>
											</form>
										</div>
									</div>
								</div>

								<div className="header-shop">
									<div className="d-inline-block box-dropdown-cart">
										<span className="font-lg icon-list icon-account">
											<span>Account</span>
										</span>
										<div className="dropdown-account">
											<ul>
												<li>
													<a href="page-account.html">My Account</a>
												</li>
												<li>
													<a href="page-account.html">Order Tracking</a>
												</li>
												<li>
													<a href="page-account.html">My Orders</a>
												</li>
												<li>
													<a href="page-account.html">My Wishlist</a>
												</li>
												<li>
													<a href="page-account.html">Setting</a>
												</li>
												<li>
													<a href="page-login.html">Sign out</a>
												</li>
											</ul>
										</div>
									</div>
									<a
										className="font-lg icon-list icon-wishlist"
										href="shop-wishlist.html"
									>
										<span>Wishlist</span>
										<span className="number-item font-xs">5</span>
									</a>
									<div className="d-inline-block box-dropdown-cart">
										<span className="font-lg icon-list icon-cart">
											<span>Cart</span>
											<span className="number-item font-xs">2</span>
										</span>
										<div className="dropdown-cart">
											<div className="item-cart mb-20">
												<div className="cart-image">
													<img
														src="../images/page/homepage1/imgsp5.png"
														alt="Ecom"
													/>
												</div>
												<div className="cart-info">
													<a
														className="font-sm-bold color-brand-3"
														href="shop-single-product.html"
													>
														2022 Apple iMac with Retina 5K Display 8GB RAM,
														256GB SSD
													</a>
													<p>
														<span className="color-brand-2 font-sm-bold">
															1 x $2856.4
														</span>
													</p>
												</div>
											</div>
											<div className="item-cart mb-20">
												<div className="cart-image">
													<img
														src="../images/page/homepage1/imgsp4.png"
														alt="Ecom"
													/>
												</div>
												<div className="cart-info">
													<a
														className="font-sm-bold color-brand-3"
														href="shop-single-product-2.html"
													>
														2022 Apple iMac with Retina 5K Display 8GB RAM,
														256GB SSD
													</a>
													<p>
														<span className="color-brand-2 font-sm-bold">
															1 x $2856.4
														</span>
													</p>
												</div>
											</div>
											<div className="border-bottom pt-0 mb-15" />
											<div className="cart-total">
												<div className="row">
													<div className="col-6 text-start">
														<span className="font-md-bold color-brand-3">
															Total
														</span>
													</div>
													<div className="col-6">
														<span className="font-md-bold color-brand-1">
															$2586.3
														</span>
													</div>
												</div>
												<div className="row mt-15">
													<div className="col-6 text-start">
														<a
															className="btn btn-cart w-auto"
															href="shop-cart.html"
														>
															View cart
														</a>
													</div>
													<div className="col-6">
														<a
															className="btn btn-buy w-auto"
															href="shop-checkout.html"
														>
															Checkout
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
									<a
										className="font-lg icon-list icon-compare"
										href="shop-compare.html"
									>
										<span>Compare</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
			<div className="mobile-header-active mobile-header-wrapper-style perfect-scrollbar">
				<div className="mobile-header-wrapper-inner">
					<div className="mobile-header-content-area">
						<div className="mobile-logo">
							<a className="d-flex" href="index.html">
								<img alt="Ecom" src="../images/template/logo.svg" />
							</a>
						</div>
						<div className="perfect-scroll">
							<div className="mobile-menu-wrap mobile-header-border">
								<nav className="mt-15">
									<ul className="mobile-menu font-heading">
										<li className="has-children">
											<a className="active" href="index.html">
												Home
											</a>
											<ul className="sub-menu">
												<li>
													<a href="index.html">Homepage - 1</a>
												</li>
												<li>
													<a href="index-2.html">Homepage - 2</a>
												</li>
												<li>
													<a href="index-3.html">Homepage - 3</a>
												</li>
												<li>
													<a href="index-4.html">Homepage - 4</a>
												</li>
												<li>
													<a href="index-5.html">Homepage - 5</a>
												</li>
												<li>
													<a href="index-6.html">Homepage - 6</a>
												</li>
												<li>
													<a href="index-7.html">Homepage - 7</a>
												</li>
												<li>
													<a href="index-8.html">Homepage - 8</a>
												</li>
												<li>
													<a href="index-9.html">Homepage - 9</a>
												</li>
												<li>
													<a href="index-10.html">Homepage - 10</a>
												</li>
											</ul>
										</li>
										<li className="has-children">
											<a href="shop-grid.html">Shop</a>
											<ul className="sub-menu">
												<li>
													<a href="shop-grid.html">Shop Grid</a>
												</li>
												<li>
													<a href="shop-grid-2.html">Shop Grid 2</a>
												</li>
												<li>
													<a href="shop-list.html">Shop List</a>
												</li>
												<li>
													<a href="shop-list-2.html">Shop List 2</a>
												</li>
												<li>
													<a href="shop-fullwidth.html">Shop Fullwidth</a>
												</li>
												<li>
													<a href="shop-single-product.html">Single Product</a>
												</li>
												<li>
													<a href="shop-single-product-2.html">
														Single Product 2
													</a>
												</li>
												<li>
													<a href="shop-single-product-3.html">
														Single Product 3
													</a>
												</li>
												<li>
													<a href="shop-single-product-4.html">
														Single Product 4
													</a>
												</li>
												<li>
													<a href="shop-cart.html">Shop Cart</a>
												</li>
												<li>
													<a href="shop-checkout.html">Shop Checkout</a>
												</li>
												<li>
													<a href="shop-compare.html">Shop Compare</a>
												</li>
												<li>
													<a href="shop-wishlist.html">Shop Wishlist</a>
												</li>
											</ul>
										</li>
										<li className="has-children">
											<a href="shop-vendor-list.html">Vendors</a>
											<ul className="sub-menu">
												<li>
													<a href="shop-vendor-list.html">Vendors Listing</a>
												</li>
												<li>
													<a href="shop-vendor-single.html">Vendor Single</a>
												</li>
											</ul>
										</li>
										<li className="has-children">
											<a href="#">Pages</a>
											<ul className="sub-menu">
												<li>
													<a href="page-about-us.html">About Us</a>
												</li>
												<li>
													<a href="page-contact.html">Contact Us</a>
												</li>
												<li>
													<a href="page-careers.html">Careers</a>
												</li>
												<li>
													<a href="page-term.html">Term and Condition</a>
												</li>
												<li>
													<a href="page-register.html">Register</a>
												</li>
												<li>
													<a href="page-login.html">Login</a>
												</li>
												<li>
													<a href="page-404.html">Error 404</a>
												</li>
											</ul>
										</li>
										<li className="has-children">
											<a href="blog.html">Blog</a>
											<ul className="sub-menu">
												<li>
													<a href="blog.html">Blog Grid</a>
												</li>
												<li>
													<a href="blog-2.html">Blog Grid 2</a>
												</li>
												<li>
													<a href="blog-list.html">Blog List</a>
												</li>
												<li>
													<a href="blog-big.html">Blog Big</a>
												</li>
												<li>
													<a href="blog-single.html">
														Blog Single - Left sidebar
													</a>
												</li>
												<li>
													<a href="blog-single-2.html">
														Blog Single - Right sidebar
													</a>
												</li>
												<li>
													<a href="blog-single-3.html">
														Blog Single - No sidebar
													</a>
												</li>
											</ul>
										</li>
										<li>
											<a href="page-contact.html">Contact</a>
										</li>
									</ul>
								</nav>
							</div>
							<div className="mobile-account">
								<div className="mobile-header-top">
									<div className="user-account">
										<a href="page-account.html">
											<img src="../images/template/ava_1.png" alt="Ecom" />
										</a>
										<div className="content">
											<h6 className="user-name">
												Hello<span className="text-brand"> Steven !</span>
											</h6>
											<p className="font-xs text-muted">
												You have 3 new messages
											</p>
										</div>
									</div>
								</div>
								<ul className="mobile-menu">
									<li>
										<a href="page-account.html">My Account</a>
									</li>
									<li>
										<a href="page-account.html">Order Tracking</a>
									</li>
									<li>
										<a href="page-account.html">My Orders</a>
									</li>
									<li>
										<a href="page-account.html">My Wishlist</a>
									</li>
									<li>
										<a href="page-account.html">Setting</a>
									</li>
									<li>
										<a href="page-login.html">Sign out</a>
									</li>
								</ul>
							</div>
							<div className="mobile-banner">
								<div className="bg-5 block-iphone">
									<span className="color-brand-3 font-sm-lh32">
										Starting from $899
									</span>
									<h3 className="font-xl mb-10">iPhone 12 Pro 128Gb</h3>
									<p className="font-base color-brand-3 mb-10">Special Sale</p>
									<a className="btn btn-arrow" href="shop-grid.html">
										learn more
									</a>
								</div>
							</div>
							<div className="site-copyright color-gray-400 mt-30">
								Copyright 2022 © Ecom - Marketplace Template.
								<br />
								Designed by
								<a href="http://alithemes.com" target="_blank">
									&nbsp; AliThemes
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
