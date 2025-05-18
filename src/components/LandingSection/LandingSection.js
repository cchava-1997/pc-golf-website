import React, { useEffect, useState } from 'react';
import './LandingSection.css';
import heroVideo from '../../assets/golf-hero.webm';
import heroImage from '../../assets/multitech-logo.png';

const LandingSection = () => {
  const [showLogo, setShowLogo] = useState(false);
  const [fadeOutLogo, setFadeOutLogo] = useState(false);
  const [moveLogoToHeader, setMoveLogoToHeader] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    // 1️⃣ Show logo briefly (pop in)
    const logoInTimer = setTimeout(() => {
      setShowLogo(true);
    }, 1000);

    // 2️⃣ Fade logo out before moving
    const fadeOutTimer = setTimeout(() => {
      setFadeOutLogo(true);
    }, 1000); // adjust independently

    // 3️⃣ Move logo into header
    const moveLogoTimer = setTimeout(() => {
      setMoveLogoToHeader(true);
    }, 8700);

    // 4️⃣ Show header itself
    const headerTimer = setTimeout(() => {
      setShowHeader(true);
    }, 8700);

    // 5️⃣ Show hero text
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 8700);

    return () => {
      clearTimeout(logoInTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(moveLogoTimer);
      clearTimeout(headerTimer);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <>
      {showHeader && (
        <header className="site-header">
          <div className="header-logo-container">
            <img src={heroImage} alt="Multitech Logo" className="header-logo" />
          </div>
        </header>
      )}

      <section className="landing-section">
        <video className="landing-video" autoPlay muted playsInline>
          <source src={heroVideo} type="video/webm" />
        </video>

        <div className="landing-overlay">
          <div className="vertical-text-container left">
            <div className="vertical-text">PRACTICE</div>
          </div>
          <div className="vertical-text-container right">
            <div className="vertical-text">PERFECTION</div>
          </div>

          {/* Center Logo with animation logic */}
          {showLogo && (
            <img
              src={heroImage}
              alt="Multitech Golf Logo"
              className={`center-logo 
                ${fadeOutLogo ? 'fade-out' : ''} 
                ${moveLogoToHeader ? 'move-to-header' : ''}`}
            />
          )}


<div className="rolling-reveal-text">
  <span className="reveal-text">MULTITECH G&nbsp;&nbsp;&nbsp;LF</span>
</div>


          {/* Text Block */}
          {showText && (
            <div className="hero-text-content fade-in-text">
              <h1>WHERE LUXURY MEETS PERFORMANCE</h1>
              <p>
                Master Flawless Ball Rolls And Refine Your Technique On Premium
                Surfaces Crafted For Perfection.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default LandingSection;
