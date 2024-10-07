import React from "react";
import "./01Style/home.css";
import Banner from "./Home/banner";
import Filtercard from "./Home/filltercardsection";
import Browsejob from "./Home/browsejob";
import Review from "./Home/review";
import Problemsolving from "./Home/problemsolvesection";
import Companies from "./Home/companysection";
import Grituppflow from "./Home/grituppflow";

const Homeindex = () => {
    return (
        <>
            <Banner/>
            <Filtercard/>
            <Browsejob/>
            <Review/>
            <Problemsolving/>
            <Companies/>
            <Grituppflow/>
        </>
    );
};

export default Homeindex;
