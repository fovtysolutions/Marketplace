import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="footer">
      <div className="footer-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 width-25 mb-30">
            <div className="mb-20">
              <img alt="Ecom" src="../images/template/logo.svg" />
            </div>
              {/* <div className="font-md mb-20 color-gray-900"><strong className="font-md-bold">Address:</strong> 502 New Design Str, Melbourne, San Francisco, CA 94110, United States</div> */}
              <div className="font-md mb-20 color-gray-900"><strong className="font-md-bold">Phone:</strong> (+01) 123-456-789</div>
              <div className="font-md mb-20 color-gray-900"><strong className="font-md-bold">E-mail:</strong> contact@ecom-market.com</div>
              <div className="font-md mb-20 color-gray-900"><strong className="font-md-bold">Hours:</strong> 8:00 - 17:00, Mon - Sat</div>
              
            </div>
            <div className="col-lg-3 width-20 mb-30">
              <h4 className="mb-30 color-gray-1000">Make Money</h4>
              <ul className="menu-footer">
                <li><a href="page-about-us.html"> Mission &amp; Vision</a></li>
                <li><a href="page-about-us.html">Our Team</a></li>
                <li><a href="page-careers.html">Careers</a></li>
                <li><a href="#">Press &amp; Media</a></li>
                <li><a href="#">Advertising</a></li>
                <li><a href="#">Testimonials</a></li>
              </ul>
            </div>
            <div className="col-lg-3 width-16 mb-30">
              <h4 className="mb-30 color-gray-1000">Company</h4>
              <ul className="menu-footer">
                <li><a href="blog-2.html">Our Blog</a></li>
                <li><a href="#">Plans &amp; Pricing</a></li>
                <li><a href="#">Knowledge Base</a></li>
                <li><a href="#">Cookie Policy</a></li>
                <li><a href="#">Office Center</a></li>
                <li><a href="blog.html">News &amp; Events</a></li>
              </ul>
            </div>
            <div className="col-lg-3 width-16 mb-30">
              <h4 className="mb-30 color-gray-1000">My account</h4>
              <ul className="menu-footer">
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Editor Help</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Live Chatting</a></li>
                <li><a href="page-contact.html">Contact Us</a></li>
                <li><a href="#">Support Center</a></li>
              </ul>
            </div>
            <div className="col-lg-3 width-23">
              <h4 className="mb-30 color-gray-1000">Stay Connected</h4>
              <div>
                <div className="mt-30">
                <a className="icon-socials" href="#"><FaFacebookF /></a>
                <a className="icon-socials" href="#"><FaInstagram /></a>
                <a className="icon-socials" href="#"><FaTwitter /></a>
                <a className="icon-socials" href="#"><FaLinkedinIn /></a>
              </div>
              <div className="mt-30">
                <img src="../images/mp/footer-4.png" alt="Ecom"/>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="footer-bottom mt-20">
            <div className="row">
              <div className="col-lg-6 col-md-12 text-center text-lg-start"><span className="color-gray-900 font-sm">Copyright &copy; 2022 Ecom Market. All rights reserved.</span></div>
              <div className="col-lg-6 col-md-12 text-center text-lg-end">
                <ul className="menu-bottom">
                  <li><a className="font-sm color-gray-900" href="page-term.html">Conditions of Use</a></li>
                  <li><a className="font-sm color-gray-900" href="page-term.html">Privacy Notice</a></li>
                  <li><a className="font-sm color-gray-900" href="page-careers.html">Interest-Based Ads</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
        </>
    );
};

export default Footer;
