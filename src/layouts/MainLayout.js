import React from 'react';

import './MainLayout.module.scss';
import Header from '../components/Navigation/Header/Header'


const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <div className="content">
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
