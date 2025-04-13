// src/components/Header/Header.js
import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="main-header">
      <div className="header-top">
        {/* Left side: brand icon */}
        <div className="header-left">
          <img src="/Logo.png" alt="Brand Icon" className="brand-icon" />
        </div>

        {/* Center: big LOGO text */}
        <div className="header-center">
          <h1 className="logo">LOGO</h1>
        </div>

        {/* Right side: icons & language */}
        <div className="header-right">
          <span className="icon">
            <img src="/search-normal.png" alt="Search" className="brand-icon" />
          </span>
          <span className="icon">
            <img src="/heart.png" alt="Wishlist" className="brand-icon" />
          </span>
          <span className="icon">
            <img src="/shopping-bag.png" alt="Cart" className="brand-icon" />
          </span>
          <span className="icon">
            <img src="/profile.png" alt="User" className="brand-icon" />
          </span>
          <div className="lang-dropdown">
            <img src="/Language.png" alt="Language" className="brand-icon" />
          </div>
        </div>
      </div>

      {/* Bottom row: nav links */}
      <div className="header-bottom">
        <nav>
          <ul>
            <li>
              <a href="/">SHOP</a>
            </li>
            <li>
              <a href="/">SKILLS</a>
            </li>
            <li>
              <a href="/">STORIES</a>
            </li>
            <li>
              <a href="/">ABOUT</a>
            </li>
            <li>
              <a href="/">CONTACT US</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
