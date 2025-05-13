import React from "react";
import './Header.css'

const Header = () => {
  return (
    <header className="hero-header">
      <div className="brand-section">
        <span className="tagline">Where luxury meets performance</span>
        <div className="brand-name">
          MULTI TECH <span className="brand-highlight">GOLF</span>
        </div>
      </div>
      <button className="order-button">Order now</button>
    </header>
  );
};

export default Header;
