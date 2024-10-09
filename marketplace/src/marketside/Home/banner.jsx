import React, { useEffect } from "react";
// import lottie from "lottie-web";

const Banner = () => {
	// useEffect(() => {
	//     const container = document.querySelector('.trial-lotty-animation');
	//     container.innerHTML = '';
	//     lottie.loadAnimation({
	//       container: container,
	//       renderer: 'svg',
	//       loop: true,
	//       autoplay: true,
	//       path: `${import.meta.env.VITE_APP_URL}men.json` // the path to the animation JSON file
	//     });
	//     const containermen = document.querySelector('.trial-lotty-animation-men');
	//     containermen.innerHTML = '';
	//     lottie.loadAnimation({
	//         container: containermen,
	//         renderer: 'svg',
	//         loop: true,
	//         autoplay: true,
	//         path: `${import.meta.env.VITE_APP_URL}menwithcoffee.json` // the path to the animation JSON file
	//       });
	//   }, []);

	return (
		<>
			<div className="col-xl-6 col-lg-6 col-md-6 mb-30">
				<div className="box-swiper">
					<div className="swiper-container swiper-group-1">
						<div className="swiper-wrapper">
							<div className="swiper-slide">
								<div className="banner-big bg-27 height-100">
									<div className="row align-items-end height-100">
										<div className="col-xl-8 col-lg-12 height-100 align-items-center d-flex">
											<div className="box-banner-big">
												<span className="font-sm text-uppercase">
													Hot Right Now
												</span>
												<h2 className="mt-10 color-gray-1000">
													Sale Up to 50% Off
												</h2>
												<h1 className="color-gray-1000 mb-20">
													Online Book Store
												</h1>
												<div className="row">
													<div className="col-xl-5 col-lg-8 col-md-10 col-sm-12">
														<p className="font-sm color-brand-3">
															Curabitur id lectus in felis hendrerit efficitur
															quis quis lectus. Donec sollicitudin elit eu ipsum
															maximus blandit. Curabitur blandit tempus
															consectetur.
														</p>
													</div>
												</div>
												<div className="mt-30">
													<a className="btn btn-brand-2" href="shop-grid.html">
														Shop now
													</a>
													<a className="btn btn-link" href="shop-grid.html">
														Learn more
													</a>
												</div>
											</div>
										</div>
										<div className="col-xl-4 banner-image">
											<img
												src="assets/imgs/page/homepage8/banner.png"
												alt="Ecom"
											/>
										</div>
									</div>
								</div>
							</div>
							{/* <div className="swiper-slide">
								<div className="banner-big bg-27 height-100">
									<div className="row align-items-end height-100">
										<div className="col-xl-8 col-lg-12 height-100 align-items-center d-flex">
											<div className="box-banner-big">
												<span className="font-sm text-uppercase">
													Hot Right Now
												</span>
												<h2 className="mt-10 color-gray-1000">
													Sale Up to 50% Off
												</h2>
												<h1 className="color-gray-1000 mb-20">
													Online Book Store
												</h1>
												<div className="row">
													<div className="col-xl-5 col-lg-8 col-md-10 col-sm-12">
														<p className="font-sm color-brand-3">
															Curabitur id lectus in felis hendrerit efficitur
															quis quis lectus. Donec sollicitudin elit eu ipsum
															maximus blandit. Curabitur blandit tempus
															consectetur.
														</p>
													</div>
												</div>
												<div className="mt-30">
													<a className="btn btn-brand-2" href="shop-grid.html">
														Shop now
													</a>
													<a className="btn btn-link" href="shop-grid.html">
														Learn more
													</a>
												</div>
											</div>
										</div>
										<div className="col-xl-4 banner-image">
											<img
												src="assets/imgs/page/homepage8/banner.png"
												alt="Ecom"
											/>
										</div>
									</div>
								</div>
							</div> */}
						</div>
						<div className="swiper-pagination swiper-pagination-1" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Banner;
