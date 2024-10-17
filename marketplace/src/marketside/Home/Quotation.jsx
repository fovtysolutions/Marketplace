import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function Quotation({nameQuote="",keyword="",description="",quantity="",inputType=""}) {
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
									<a href="#">
										Learn More <IoIosArrowForward />
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-5">
							<div className="quotation-form">
								<div className="container mt-5">
									<form>
                                    <h2 className="title-form-qut">{nameQuote}</h2>
										<div className="mb-3">
											{/* <label htmlFor="productName" className="form-label">
												Product Name or Keywords
											</label> */}
											<input
												type="text"
												className="form-control"
												id="productName"
												required
                                                placeholder={keyword}
											/>
										</div>
										{/* <div className="form-floating mb-3">
											<input
												type="text"
												className="form-control"
												id="productName"
												placeholder="Product Name or Keywords"
                                                required
											/>
											<label htmlFor="floatingInput">Product Name or Keywords</label>
										</div> */}

										<div className="mb-3">
											{/* <label
												htmlFor="productDescription"
												className="form-label"
											>
												Product Description
											</label> */}
											<textarea
												className="form-control"
												id="productDescription"
												rows={3}
												required
												defaultValue={""}
                                                placeholder={description}
											/>
										</div>
										<div className="mb-3">
											{/* <label htmlFor="purchaseQuantity" className="form-label">
												Purchase Quantity
											</label> */}
											<input
												type={inputType}
												className="form-control"
												id="purchaseQuantity"
												min={1}
												required
                                                placeholder={quantity}
											/>
										</div>
										<button type="submit" className="btn">
											Post Your Request Now
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
