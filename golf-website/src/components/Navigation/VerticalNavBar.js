import React from 'react';
import './NavBar.module.scss';

const VerticalNavBar = () => {
  return (
    <nav className="vertical-nav">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#installations">Installations</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default VerticalNavBar;
