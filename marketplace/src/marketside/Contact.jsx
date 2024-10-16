import React from "react";
import "./01Style/contact.css";
import Contactheading from "./Contact/contactheading";
import Contactcontent from "./Contact/contactcontent";


const Contact = () => {
    return (
        <>
            <div className="section contact-us wf-section">
                <Contactheading/>
                <Contactcontent/>
            </div>
        </>
    );
};

export default Contact;
