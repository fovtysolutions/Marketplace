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
import Dealassist from "./Home/dealassist";

const Homeindex = () => {
	const setArray = [
		{ name: "Meet suplliers hassle-free and without boundries"},
		{ name: "join our vip buyer cummunitym find out mmore"},
		{ name: "subscribe to receive globle sources e-magazines-free"},
		{ name: "Watch our videos ot the latest trends and products from our suppliers"},
	]
	const setArray2 = [
		{ name: "Company: ABCD",dis:'Catagory- Agriculture'},
		{ name: "Company: ABCD",dis:'Catagory- Agriculture'},
		{ name: "Company: ABCD",dis:'Catagory- Agriculture'},
		{ name: "Company: ABCD",dis:'Catagory- Agriculture'},
	]
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
				<Leads />
                <Quotation
					nameQuote={"Ask for Quotation (RFQ)"}
					keyword={"Product name or keywords"}
					description={"Product discription"}
					quantity={"Product Quantity"}
					inputType={"text"}
				/>
				<Dealassist 
					suppliers={setArray} 
					titlename={"Deal assist"} 
					icon={"Deal assist"} 
				/>
				<TradeShow />
				<Dealassist 
					suppliers={setArray} 
					titlename={"Secure Tranding Services"} 
					icon={"Deal assist"} 
				/>
				<Quotation
					nameQuote={"Submit CV"}
					keyword={"Your name"}
					description={"Your Details"}
					inputType={"file"}
				/>
				<Dealassist 
					suppliers={setArray2} 
					titlename={"Membership Subscription"} 
					icon={"Deal assist"} 
					vender={"vendor"}
				/>
			</div>
		</>
	);
};

export default Homeindex;
