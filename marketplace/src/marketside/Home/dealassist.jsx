import React from "react";

export default function Suppliers({suppliers=[],titlename='',vender=""}) {
	return (
		<>
			
			<div className="supplier-sec">
				<div className="container-fluid">
					<h3>{titlename}</h3>
					<div className="row">
						<div className="supplier-cnt">
							{suppliers.map(item => (
								<div className="supplier-card" style={{display: vender===""?'inline-block':'none'}}>
									<div className="supplier-card-txt">
										<img src="../images/mp/manufacturer/1.png" />
										<div className="title">
											{item.name}
										</div>
									</div>
								</div>
							))}
							{suppliers.map(item => (
								<div className="supplier-card" style={{display: vender===""?'none':'inline-block'}}>
									<div className="supplier-card-txt">
										<img src="../vender.png" />
										<div className="title">{item.name}</div>
										<div className="manufacture">****</div>
										<div className="business">
											{item.dis}
										</div>
									</div>
								</div>
							))}
							{/* <div className="supplier-card">
								<div className="cmp-logo">
									<img src="/images/favicon.svg"alt="" />
								</div>
								<div className="supplier-card-txt">
									<div className="title">Laxmi Chemicals LLC</div>
									<div className="manufacture">Verified Manufacture</div>
									<div className="business">
										Business Type | No. of Employees 150
									</div>
									<img src="../images/mp/manufacturer/1.png" />
								</div>
							</div> */}
							{/* <div className="supplier-card">
								<div className="cmp-logo">
									<img src="/images/favicon.svg"alt="" />
								</div>
								<div className="supplier-card-txt">
									<div className="title">Laxmi Chemicals LLC</div>
									<div className="manufacture">Verified Manufacture</div>
									<div className="business">
										Business Type | No. of Employees 150
									</div>
									<img src="../images/mp/manufacturer/1.png" />
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
