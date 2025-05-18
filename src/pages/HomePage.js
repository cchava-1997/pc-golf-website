import React from 'react';
import LandingSection from '../components/LandingSection/LandingSection';
import MatScrollReveal from '../components/MatScrollReveal/MatScrollReveal';
import Header from '../components/Navigation/Header/Header'

const HomePage = () => {
  return (
    <div className="home-page">
      <LandingSection />
      <MatScrollReveal />
    </div>
  );
};

export default HomePage;
