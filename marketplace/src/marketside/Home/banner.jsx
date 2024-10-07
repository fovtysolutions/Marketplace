import React, { useEffect } from 'react';
import lottie from 'lottie-web';

const Banner = () => {
    useEffect(() => {
        const container = document.querySelector('.trial-lotty-animation');
        container.innerHTML = '';
        lottie.loadAnimation({
          container: container,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: `${import.meta.env.VITE_APP_URL}men.json` // the path to the animation JSON file
        });
        const containermen = document.querySelector('.trial-lotty-animation-men');
        containermen.innerHTML = '';
        lottie.loadAnimation({
            container: containermen, 
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: `${import.meta.env.VITE_APP_URL}menwithcoffee.json` // the path to the animation JSON file
          });
      }, []);

    return (
        <>
            <div className="trial-hero-section">
                <div className="trial-w-layout-grid trial-hero-grid">
                <div className="trial-animation-box-left">
                    <div className="trial-lotty-animation"></div>
                </div>
                <div className="trial-center-hero-div">
                    <div className="trial-top-text">We are your future</div>
                        <h1 className="trial-title-1 center">Get your desired Jobs with <span>Gritupp.</span></h1>
                        <div className="margin-30px">
                            <p className="trial-subhead center">
                            Get Jobs, create trackable resumes and enrich your applications
                            </p>
                        </div>
                        <div className="margin-50px">
                            <form className="trial-search-wrapper w-form" method="GET" action="assets/php/search.php">
                                <input type="search" className="trial-search-input trial-w-input" maxLength="256" name="query" placeholder="Keywords..." id="searchmain" required="" />
                                <input type="submit" className="trial-button trial-search trial-w-button" value="Search" />
                            </form>
                        </div>
                    </div>
                    <div className="trial-animation-box-right">
                        <div className="trial-lotty-animation-men"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
