import '../styles/components/Checkout.css';

import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import React from 'react';

const Checkout = () => {
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Lista de pedidos</h3>
        <div className="Checkout-item">
          <div className="Checkout-element">
            <h4>Item name</h4>
            <span>$132</span>
          </div>
          <button type="button">
            <span>
              <FaTrashAlt />
            </span>
          </button>
        </div>
      </div>
      <div className="Checkout-sidebar">
        <h3>Precio total: $132</h3>
        <Link to="/checkout/information">
          <button type="button">Continuar pedido</button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
