import '../styles/components/Layout.css';

import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import React from 'react';

const Layout = () => {
  return (
    <div className="Main">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
