import '../styles/components/Payment.css';

import React, { useContext } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { useNavigate } from 'react-router-dom';

import AppContext from '../context/AppContext';
const Payment = () => {
  const navigate = useNavigate();
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  const handleSumTotal = () => {
    const reducer = (acc, curr) => acc + curr.product.price * curr.qty;

    const sumTotal = cart.reduce(reducer, 0);

    return sumTotal;
  };

  const handlePaymentSuccess = (data) => {
    console.log(data);

    const order = {
      buyer,
      products: cart,
      payment: data,
    };
    addNewOrder(order);
    navigate('/checkout/success');
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido</h3>
        {cart.map(({ product, qty }) => (
          <div className="Payment-item" key={product.title}>
            <div className="Payment-element">
              <h4>{product.title}</h4>
              <span>
                {qty} x ${product.price}
              </span>
            </div>
          </div>
        ))}
        <div className="Payment-item" style={{ margin: '32px 0', fontSize: '1.25rem' }}>
          <div className="Payment-element">
            <h4>Total</h4>

            <span style={{ fontWeight: 'bold' }}>${handleSumTotal()}</span>
          </div>
        </div>
        <div className="Payment-button">
          <PayPalButtons
            style={{ layout: 'vertical' }}
            amount={handleSumTotal()}
            onClick={() => console.log('Payment start')}
            onError={(error) => console.log(error)}
            onCancel={(data) => {
              console.log('Payment cancel by user');
              console.log(data);
            }}
            onApprove={(data) => handlePaymentSuccess(data)}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
