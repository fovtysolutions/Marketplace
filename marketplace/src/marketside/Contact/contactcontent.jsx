import React from "react";

const Contactcontent = () => {
    return (
        <>
            <div className="container-default contact-us">
                <div className="contact-us-wrapper">
                    <div className="w-layout-grid contact-us-grid">
                        <div className="w-form opacity">
                            <form>
                                <div className="w-layout-grid grid-form v2">
                                    <div>
                                        <label htmlFor="Name-2">Name<span className="color-red">*</span></label>
                                        <input type="text" className="input w-input" maxLength="256" name="Name" data-name="Name" placeholder="John Carter" id="Name-2" required="" />
                                    </div>
                                    <div>
                                        <label htmlFor="Email-4">Email<span className="color-red">*</span></label>
                                        <input type="email" className="input w-input" maxLength="256" name="Email" data-name="Email" placeholder="john@company.com" id="Email" required="" />
                                    </div>
                                    <div>
                                        <label htmlFor="Phone-Number">Phone Number</label>
                                        <input type="tel" className="input w-input" maxLength="256" name="Phone_Number" data-name="Phone Number" placeholder="(123) 456 - 7890" id="Phone-Number" />
                                    </div>
                                    <div>
                                        <label htmlFor="Subject">Subject<span className="color-red">*</span></label>
                                        <input type="text" className="input w-input" maxLength="256" name="Subject" data-name="Subject" placeholder="How can we help?" id="Subject" required="" />
                                    </div>
                                    <div className="input-container-full-width" id="w-node-_11ff66e2-bb63-3205-39c9-a48a569518d9-270281fa">
                                        <label htmlFor="Message">Message</label>
                                            <textarea placeholder="Hello, I would like to get in touch with Jobs Job Board to post a featured job opening..." maxLength="5000" id="Message" name="Message" data-name="Message" required="" className="textarea w-input"></textarea>
                                    </div>
                                </div>
                                <div className="spacer form"></div>
                                <div className="w-layout-grid grid-form v2">
                                    <input type="submit" value="Send Message" data-wait="Please wait..." className="button-primary large w-button" />
                                </div>
                            </form>
                            <div className="success-form w-form-done">
                                <div>Thank you! Your submission has been received!</div>
                            </div>
                            <div className="error-message w-form-fail">
                                <div>
                                    Oops! Something went wrong while submitting the form.
                                </div>
                            </div>
                        </div>
                        <div className="sidebar-form opacity">
                            <div className="form-sidebar-title">Contact Us</div>
                            <p className="mg-bottom-50px">
                                Have questions or feedback? We'd love to hear from you! Reach out to our team at
                                <a href="mailto:info@gritupp.com">info@gritupp.com.</a>
                            </p>
                            <div className="form-sidebar-title">Follow us</div>
                            <div className="w-layout-grid social-media-grid">
                                <a href="http://facebook.com/" className="social-media-link w-inline-block">
                                    <img src="https://assets.website-files.com/5ec5d86528da2f24250d634c/5ec9826823eec548b3182923_facebook.svg" alt="Facebook Icon - " />
                                </a>
                                <a href="https://twitter.com/" className="social-media-link w-inline-block">
                                    <img src="https://assets.website-files.com/5ec5d86528da2f24250d634c/5ec98269518a6e6118d567d1_twitter.svg" alt="Twitter - " />
                                </a>
                                <a href="https://www.instagram.com/" className="social-media-link w-inline-block">
                                    <img src="https://assets.website-files.com/5ec5d86528da2f24250d634c/5ec982692fa1e9d0c1a8db49_instagram.svg" alt="Instagram - " />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contactcontent;
