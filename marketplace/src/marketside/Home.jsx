import React from "react";
import "./01Style/home.css";
import Banner from "./Home/banner";
import Heroleft from "./Home/heroleft";
import Review from "./Home/review";
import Problemsolving from "./Home/problemsolvesection";
import Companies from "./Home/companysection";
import Grituppflow from "./Home/grituppflow";
import Heroright from "./Home/Heroright";



const Homeindex = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                {/* <div className="hero-main-cnt"> */}
                <Heroleft/>
                <Banner/>
                <Heroright/>
                {/* </div> */}
                </div>
            </div>
            
            <Review/>
            <Problemsolving/>
            <Companies/>
            <Grituppflow/>
        </>
    );
};

export default Homeindex;
