import React, { useEffect } from "react";
// import lottie from "lottie-web";
import '../01Style/list.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules"; // Import Autoplay module


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
				{/* <div className="banner">
					<img
						src="https://media.istockphoto.com/id/182408547/photo/elegant-shopping-mall.jpg?s=612x612&w=0&k=20&c=qpoZ75-JlU67tx710rgzp4Eb38kb5H-2M_bG9TTEZK0="
						alt="Banner Pic"
					/>
				</div> */}
				<div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-30">
					<div className="banner-cnt">
					<Swiper
					loop={true} 
					autoplay={{ 
						delay: 3000, // Set autoplay delay in milliseconds
						disableOnInteraction: false // Continue autoplay after user interaction
					}}
					pagination={{ clickable: true }} // Enable clickable pagination
					modules={[Pagination, Autoplay]} // Add Autoplay module
					className="mySwiper"
				>
					<SwiperSlide>
						<div className="box-banner-big">
						<div className="banner">
					<img
						src="../images/mp/banner/banner-1.png"
						alt="Banner Pic"
					/>
				</div> 
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="box-banner-big">
						<div className="banner">
					<img
						src="../images/mp/banner/banner-2.png"
						alt="Banner Pic"
					/>
				</div> 
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="box-banner-big">
						<div className="banner">
					<img
						src="../images/mp/banner/banner-3.png"
						alt="Banner Pic"
					/>
				</div> 
						</div>
					</SwiperSlide>
					
				</Swiper>
					</div>		
				</div>
		</>
	);
};

export default Banner;
