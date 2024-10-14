import React from "react";
import "./01Style/refundandcancellation.css";

const Refundandcancellation = () => {
    return (
        <>
            <div className="section contact-us wf-section">
                <div className="container-small align-center">
                    <h1 className="heading-size-1 opacity">
                        Refund & Cancellation <span className="color-primary-1 underline">Gritupp </span>
                    </h1>
                </div>
                <div className="container-default contact-us">
                    <div className="contact-us-wrapper">
                        <div className="container-small2 align-center">
                            <p className="paragraph-large">
                                <b className="color-primary-1 underline">REFUNDS:</b> Please Contact info@gritupp.com for any refund related queries.<br/><br/>
                                <b className="color-primary-1 underline">CANCELLATION:</b> 
                                    If you wish to cancel your plan you need to contact us ASAP. You may cancel a plan without penalty as long as you have not used it.
                                <br/><br/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Refundandcancellation;
