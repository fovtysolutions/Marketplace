import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";

const Footer = () => {
    return (
        <>
            <footer className="footer">
      <div className="footer-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 width-25 mb-30">
              <h4 className="mb-30 color-gray-1000">Contact</h4>
              <div className="font-md mb-20 color-gray-900"><strong className="font-md-bold">Address:</strong> 502 New Design Str, Melbourne, San Francisco, CA 94110, United States</div>
              <div className="font-md mb-20 color-gray-900"><strong className="font-md-bold">Phone:</strong> (+01) 123-456-789</div>
              <div className="font-md mb-20 color-gray-900"><strong className="font-md-bold">E-mail:</strong> contact@ecom-market.com</div>
              <div className="font-md mb-20 color-gray-900"><strong className="font-md-bold">Hours:</strong> 8:00 - 17:00, Mon - Sat</div>
              <div className="mt-30">
                <a className="icon-socials" href="#"><FaFacebookF /></a>
                <a className="icon-socials" href="#"><FaInstagram /></a>
                <a className="icon-socials" href="#"><FaTwitter /></a>
                <a className="icon-socials" href="#"><FaLinkedinIn /></a>
              </div>
            </div>
            <div className="col-lg-3 width-20 mb-30">
              <h4 className="mb-30 color-gray-1000">Make Money with Us</h4>
              <ul className="menu-footer">
                <li><a href="page-about-us.html"><IoMdArrowDropright /> Mission &amp; Vision</a></li>
                <li><a href="page-about-us.html"><IoMdArrowDropright />Our Team</a></li>
                <li><a href="page-careers.html"><IoMdArrowDropright />Careers</a></li>
                <li><a href="#"><IoMdArrowDropright />Press &amp; Media</a></li>
                <li><a href="#"><IoMdArrowDropright />Advertising</a></li>
                <li><a href="#"><IoMdArrowDropright />Testimonials</a></li>
              </ul>
            </div>
            <div className="col-lg-3 width-16 mb-30">
              <h4 className="mb-30 color-gray-1000">Company</h4>
              <ul className="menu-footer">
                <li><a href="blog-2.html"><IoMdArrowDropright />Our Blog</a></li>
                <li><a href="#"><IoMdArrowDropright />Plans &amp; Pricing</a></li>
                <li><a href="#"><IoMdArrowDropright />Knowledge Base</a></li>
                <li><a href="#"><IoMdArrowDropright />Cookie Policy</a></li>
                <li><a href="#"><IoMdArrowDropright />Office Center</a></li>
                <li><a href="blog.html"><IoMdArrowDropright />News &amp; Events</a></li>
              </ul>
            </div>
            <div className="col-lg-3 width-16 mb-30">
              <h4 className="mb-30 color-gray-1000">My account</h4>
              <ul className="menu-footer">
                <li><a href="#"><IoMdArrowDropright />FAQs</a></li>
                <li><a href="#"><IoMdArrowDropright />Editor Help</a></li>
                <li><a href="#"><IoMdArrowDropright />Community</a></li>
                <li><a href="#"><IoMdArrowDropright />Live Chatting</a></li>
                <li><a href="page-contact.html"><IoMdArrowDropright />Contact Us</a></li>
                <li><a href="#"><IoMdArrowDropright />Support Center</a></li>
              </ul>
            </div>
            <div className="col-lg-3 width-23">
              <h4 className="mb-30 color-gray-1000">App &amp; Payment</h4>
              <div>
                <p className="font-md color-gray-900">Download our Apps and get extra 15% Discount on your first Order…!</p>
                <div className="mt-20"><a className="mr-10" href="#"><img src="assets/imgs/template/appstore.png" alt="Ecom"/></a><a href="#"><img src="assets/imgs/template/google-play.png" alt="Ecom"/></a></div>
                <p className="font-md color-gray-900 mt-20 mb-10">Secured Payment Gateways</p><img src="assets/imgs/template/payment-method.png" alt="Ecom"/>
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
