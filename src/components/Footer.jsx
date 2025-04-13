
import React from "react";
import "./Footer.css";

const paymentIcons = [
  "/google-pay.png",
  "/paypal.png",
  "/amex.png",
  "/apple-pay.png",
  "/stripe.png",
];

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-subscribe">
        <div className="subscribe-text">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>
        </div>
        <form className="subscribe-form">
          <input type="email" placeholder="Enter your e-mail..." />
          <button type="submit">SUBSCRIBE</button>
        </form>
      </div>

      <hr className="footer-divider" />

      <div className="footer-columns">
        <div className="footer-col">
          <h4>mettā muse</h4>
          <ul>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Stories</a></li>
            <li><a href="/">Artisans</a></li>
            <li><a href="/">Boutiques</a></li>
            <li><a href="/">Contact Us</a></li>
            <li><a href="/">EU Compliances Docs</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>QUICK LINKS</h4>
          <ul>
            <li><a href="/">Orders &amp; Shipping</a></li>
            <li><a href="/">Join/Login as a Seller</a></li>
            <li><a href="/">Payment &amp; Pricing</a></li>
            <li><a href="/">Return &amp; Refunds</a></li>
            <li><a href="/">FAQs</a></li>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Terms &amp; Conditions</a></li>
          </ul>
        </div>

        <div className="footer-col contact-col">
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h4>CURRENCY</h4>
          <p>🇺🇸 USD</p>
          <p className="currency-note">
            Transactions will be completed in Euros and a currency reference is 
            available on hover.
          </p>
        </div>
        <div className="footer-col follow-col">
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <span className="icon">IG</span>
            <span className="icon">IN</span>
          </div>
          <h4>mettā muse ACCEPTS</h4>
          <div className="lang-dropdown">
            <img
            src="/Frame 136278.png"
            alt="Brand Icon"
            className="brand-icon"
          />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
