import React, { useEffect } from "react";
// import lottie from "lottie-web";
import '../01Style/list.css';

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
				<div className="banner">
					<img
						src="https://media.istockphoto.com/id/182408547/photo/elegant-shopping-mall.jpg?s=612x612&w=0&k=20&c=qpoZ75-JlU67tx710rgzp4Eb38kb5H-2M_bG9TTEZK0="
						alt="Banner Pic"
					/>
				</div>
		</>
	);
};

export default Banner;
