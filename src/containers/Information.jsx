import '../styles/components/Information.css';

import { Link, useNavigate } from 'react-router-dom';
import React, { useRef, useContext } from 'react';
import AppContext from '../context/AppContext';

const Information = () => {
  const form = useRef(null);
  const navigate = useNavigate();
  const { state, addToBuyer } = useContext(AppContext);
  const { cart } = state;

  const handleSubmit = () => {
    const formData = new FormData(form.current);

    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone'),
    };

    addToBuyer(buyer);
    navigate('/checkout/payment');
  };

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
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
          <div className="Information-back">
            <Link to="/checkout">Regresar</Link>
          </div>
          <div className="Information-next">
            <button onClick={handleSubmit}>Pagar</button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido</h3>
        {cart.map(({ product, qty }) => (
          <div className="Information-item" key={product.id}>
            <div className="Information-element">
              <h4>{product.title}</h4>
              <span>
                {qty} x ${product.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
