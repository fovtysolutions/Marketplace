import React from "react";
export default function Heroright() {
	return (
		<>
			<div className="col-xl-3 col-lg-3 col-md-3 mb-30">
				<div className="sidebar-border mb-0">
					<div className="sidebar-head">
						<div className="product-t-cnt">					
							<h6 className="color-gray-900">Most Popular</h6>
							<a
								className="link-see-more"
								data-bs-toggle="collapse"
								href="#moreMenu"
								role="button"
								aria-expanded="false"
								aria-controls="moreMenu"
							>
								See All
							</a>
						</div>
					</div>
					<div className="sidebar-content">
						<ul>
							<li>
								<div className="card-grid-style-2 ">
									{/* <label className="label font-xs color-gray-500 bg-success">
										New
									</label> */}
									<div className="image-box">
										<a href="shop-single-product.html">
											<img
												src="../images/page/homepage8/book1.png"
												alt="Ecom"
											 />
										</a>
									</div>
									<div className="info-right">
										<span className="font-xs color-gray-500">Steven Job</span>
										<br />
										<a
											className="color-brand-3 font-sm-bold"
											href="shop-single-product.html"
										>
											Eight {" "}
										</a>
										<div className="price-info">
											<strong className="font-lg-bold color-brand-3 price-main">
												$2556.3
											</strong>
											{/* <span className="color-gray-500 price-line">$3225.6</span> */}
										</div>
									</div>
								</div>
							</li>
              <li>
								<div className="card-grid-style-2 ">
									{/* <label className="label font-xs color-gray-500 bg-success">
										New
									</label> */}
									<div className="image-box">
										<a href="shop-single-product.html">
											<img
												src="../images/page/homepage8/book2.png"
												alt="Ecom"
											 />
										</a>
									</div>
									<div className="info-right">
										<span className="font-xs color-gray-500">Steven Job</span>
										<br />
										<a
											className="color-brand-3 font-sm-bold"
											href="shop-single-product.html"
										>
											Success {" "}
										</a>
										<div className="price-info">
											<strong className="font-lg-bold color-brand-3 price-main">
												$2556.3
											</strong>
											{/* <span className="color-gray-500 price-line">$3225.6</span> */}
										</div>
									</div>
								</div>
							</li>
              <li>
								<div className="card-grid-style-2 ">
									{/* <label className="label font-xs color-gray-500 bg-success">
										New
									</label> */}
									<div className="image-box">
										<a href="shop-single-product.html">
											<img
												src="../images/page/homepage8/book3.png"
												alt="Ecom"
											 />
										</a>
									</div>
									<div className="info-right">
										<span className="font-xs color-gray-500">Steven Job</span>
										<br />
										<a
											className="color-brand-3 font-sm-bold"
											href="shop-single-product.html"
										>
											Rational {" "}
										</a>
										<div className="price-info">
											<strong className="font-lg-bold color-brand-3 price-main">
												$2556.3
											</strong>
											{/* <span className="color-gray-500 price-line">$3225.6</span> */}
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
