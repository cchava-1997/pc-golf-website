import React from 'react';
import './LandingSection.module.scss';

const LandingSection = () => {
  return (
    <section className="landing-section">
      <div className="landing-animation">
        {/* A placeholder for the animated golf ball or visual */}
        <div className="golf-ball-animation">
          <img src="/assets/images/golf-ball.png" alt="Golf Ball" />
        </div>
      </div>
      <div className="landing-content">
        <h1 className="landing-title">Where Luxury Meets Performance</h1>
        <p className="landing-description">
          Discover the perfect blend of luxury and efficiency with our premium golf products.
        </p>
        <div className="scroll-indicator">
          <span className="scroll-arrow">&#x2193; Scroll Down</span>
        </div>
      </div>
    </section>
  );
}

export default LandingSection;
