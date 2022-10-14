import '../styles/components/Information.css';

import { Link } from 'react-router-dom';
import React from 'react';

const Information = () => {
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto</h2>
        </div>
        <div className="Information-form">
          <form action="">
            <input type="text" placeholder="Nombre completo" name="name" id="name" />
            <input type="text" placeholder="Correo electronico" name="email" id="email" />
            <input type="text" placeholder="Dirección" name="address" id="address" />
            <input type="text" placeholder="Apto" name="apto" id="apto" />
            <input type="text" placeholder="Ciudad" name="city" id="city" />
            <input type="text" placeholder="Pais" name="country" id="country" />
            <input type="text" placeholder="Estado" name="state" id="state" />
            <input type="text" placeholder="Codigo postal" name="cp" id="cp" />
            <input type="text" placeholder="Telefono" name="phone" id="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">Regresar</div>
          <div className="Information-next">
            <Link to="/checkout/payment">Pagar</Link>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido</h3>
        <div className="Information-item">
          <div className="Information-element">
            <h4>Item name</h4>
            <span>$ 132</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
