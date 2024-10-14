// import React, { useEffect } from "react";
// import lottie from "lottie-web";
<<<<<<< HEAD
import React from "react";
// import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
=======
import '../01Style/list.css';
>>>>>>> 8b3cc4ac8348e13d67aef6f576d9741a9844ab03

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
<<<<<<< HEAD
		<> <div class="col-xl-6 col-lg-6 col-md-6 mb-30">
			<Swiper 
			loop={true} // Enables looping
			autoplay={{ 
				delay: 2000, // Set autoplay delay in milliseconds
				disableOnInteraction: false // Continue autoplay after user interaction
			}}
			pagination={true} modules={[Pagination, Autoplay]} className="mySwiper">
				<SwiperSlide>
					<div className="hero-banner">
						<span className="font-sm text-uppercase">Hot Right Now</span>
						<h2 className="mt-10 color-gray-1000">Sale Up to 50% Off</h2>
						<h1 className="color-gray-1000 mb-20">Online Book Store</h1>
						<div className="row">
							{/* <div className="col-xl-8 col-lg-8 col-md-10 col-sm-12"> */}
							<div className="">
								<p className="font-sm color-brand-3">
									Curabitur id lectus in felis hendrerit efficitur quis quis
									lectus. Donec sollicitudin elit eu ipsum maximus blandit.
									Curabitur blandit tempus consectetur.
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
				</SwiperSlide>
				<SwiperSlide>
					<div className="hero-banner">
						<span className="font-sm text-uppercase">Hot Right Now</span>
						<h2 className="mt-10 color-gray-1000">Sale Up to 50% Off</h2>
						<h1 className="color-gray-1000 mb-20">Online Book Store</h1>
						<div className="row">
							{/* <div className="col-xl-8 col-lg-8 col-md-10 col-sm-12"> */}
							<div className="">
								<p className="font-sm color-brand-3">
									Curabitur id lectus in felis hendrerit efficitur quis quis
									lectus. Donec sollicitudin elit eu ipsum maximus blandit.
									Curabitur blandit tempus consectetur.
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
				</SwiperSlide>
				<SwiperSlide>
					<div className="hero-banner">
						<span className="font-sm text-uppercase">Hot Right Now</span>
						<h2 className="mt-10 color-gray-1000">Sale Up to 50% Off</h2>
						<h1 className="color-gray-1000 mb-20">Online Book Store</h1>
						<div className="row">
							{/* <div className="col-xl-8 col-lg-8 col-md-10 col-sm-12"> */}
							<div className="">
								<p className="font-sm color-brand-3">
									Curabitur id lectus in felis hendrerit efficitur quis quis
									lectus. Donec sollicitudin elit eu ipsum maximus blandit.
									Curabitur blandit tempus consectetur.
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
				</SwiperSlide>
				<SwiperSlide>
					<div className="hero-banner">
						<span className="font-sm text-uppercase">Hot Right Now</span>
						<h2 className="mt-10 color-gray-1000">Sale Up to 50% Off</h2>
						<h1 className="color-gray-1000 mb-20">Online Book Store</h1>
						<div className="row">
							{/* <div className="col-xl-8 col-lg-8 col-md-10 col-sm-12"> */}
							<div className="">
								<p className="font-sm color-brand-3">
									Curabitur id lectus in felis hendrerit efficitur quis quis
									lectus. Donec sollicitudin elit eu ipsum maximus blandit.
									Curabitur blandit tempus consectetur.
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
				</SwiperSlide>
			</Swiper>
			</div>
=======
		<>
				<div className="banner">
					<img
						src="https://media.istockphoto.com/id/182408547/photo/elegant-shopping-mall.jpg?s=612x612&w=0&k=20&c=qpoZ75-JlU67tx710rgzp4Eb38kb5H-2M_bG9TTEZK0="
						alt="Banner Pic"
					/>
				</div>
>>>>>>> 8b3cc4ac8348e13d67aef6f576d9741a9844ab03
		</>
	);
};

export default Banner;
