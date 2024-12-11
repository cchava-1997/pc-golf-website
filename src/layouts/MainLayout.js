import React from 'react';
import VerticalNavBar from '../components/Navigation/VerticalNavBar';
import './MainLayout.module.scss';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <VerticalNavBar />
      <div className="content">
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
