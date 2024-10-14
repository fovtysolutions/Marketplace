import React from "react";
import "./01Style/home.css";
import Banner from "./Home/banner";
import Heroleft from "./Home/heroleft";
import Review from "./Home/review";
import Problemsolving from "./Home/Latestdeals";
import Companies from "./Home/Topdeals";
import Heroright from "./Home/Heroright";
import Topdeals from "./Home/Topdeals";
import Trendingproducts from "./Home/Trendingproducts";
import Suppliers from "./Home/Suppliers";
import Sourcenow from "./Home/Sourcenow";



const Homeindex = () => {
    return (
        <>
            <div className="container">
                <div className="row" style={{ paddingTop: '20px'}}>
                {/* <div className="hero-main-cnt"> */}
                <Heroleft/>
                <Banner/>
                <Heroright/>
                {/* </div> */}
                </div>
                <Trendingproducts/>
                <Suppliers/>
                <Sourcenow/>
            </div>
        </>
    );
};

export default Homeindex;
