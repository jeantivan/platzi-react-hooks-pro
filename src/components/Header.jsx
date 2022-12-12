import '../styles/components/Header.css';

import { FaShoppingBasket } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;
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
          {cart.length > 0 && <span className="Header-alert">{cart.length}</span>}
        </Link>
      </div>
    </div>
  );
};

export default Header;
