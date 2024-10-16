import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function Quotation() {
	return (
		<>
			<div className="quotation-sec">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-7">
							<div className="quotation-txt">
								<h2>EASY SOURCING</h2>
								<p className="mb-4">
									An easy way to post your sourcing requests and get quotes.
								</p>
								<p className="mb-4">
									One request, multiple quotes
									<br />
									Verified suppliers matching
									<br />
									Quotes comparison and sample request
								</p>
                                <div>
                                    <a href="#">Learn More <IoIosArrowForward /></a>
                                </div>
							</div>
						</div>
						<div className="col-md-5">
							<div className="quotation-form">
                                
                            </div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
