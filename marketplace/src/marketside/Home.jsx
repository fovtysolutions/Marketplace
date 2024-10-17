import React from "react";
import "./01Style/home.css";
import Banner from "./Home/banner";
import Heroleft from "./Home/Heroleft";
import Heroright from "./Home/Heroright";
import Trendingproducts from "./Home/Trendingproducts";
import Suppliers from "./Home/Suppliers";
import Sourcenow from "./Home/Sourcenow";
import Quotation from "./Home/Quotation";
import Leads from "./Leads";
import TradeShow from "./tradeshow";

const Homeindex = () => {
	return (
		<>
			<div className="container-fluid">
				<div className="row-hero mb-30">
					<Heroleft />
					<Banner />
					<Heroright />
				</div>
				<Trendingproducts />
				<Suppliers />
				<Sourcenow />
                <Quotation/>
				<Leads />
				<TradeShow />
			</div>
		</>
	);
};

export default Homeindex;
