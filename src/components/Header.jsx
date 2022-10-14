import '../styles/components/Header.css';

import { FaShoppingBasket } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => {
  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">PlatziConf Merch</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <span>
            <FaShoppingBasket />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
