import '../styles/components/Success.css';

import React from 'react';

const Success = () => {
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>Oscar, Gracias por tu compra</h2>
        <span>Tu pedido llegará en 3 dias a tu dirección</span>
        <div className="Success-map">Google maps</div>
      </div>
    </div>
  );
};

export default Success;
