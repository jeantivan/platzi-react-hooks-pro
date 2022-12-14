import '../styles/components/Checkout.css';

import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product) => () => {
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (acc, curr) => acc + curr.product.price * curr.qty;

    const sumTotal = cart.reduce(reducer, 0);

    return sumTotal;
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de pedidos</h3> : <h3>Sin pedidos...</h3>}
        {cart.map(({ product, qty }) => (
          <div key={product.id} className="Checkout-item">
            <div className="Checkout-element">
              <h4>{product.title}</h4>
              <span>
                {qty} x ${product.price}
              </span>
            </div>
            <button type="button" onClick={handleRemove(product)}>
              <span>
                <FaTrashAlt />
              </span>
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio total: ${handleSumTotal()}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
