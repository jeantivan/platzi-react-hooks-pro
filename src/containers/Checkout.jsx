import '../styles/components/Checkout.css';

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
          <button type="button">Eliminar</button>
        </div>
      </div>
      <div className="Checkout-sidebar">
        <h3>Precio total: $132</h3>
        <button type="button">Continuar pedido</button>
      </div>
    </div>
  );
};

export default Checkout;
