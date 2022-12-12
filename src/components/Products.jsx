import '../styles/components/Products.css';

import Product from './Product';
import React, { useContext } from 'react';

import AppContext from '../context/AppContext';

const Products = () => {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Products;
