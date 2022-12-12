import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    const newCart = [...state.cart];

    const indexOfProductInCart = newCart.findIndex(
      ({ product }) => product.id === payload.id,
    );

    if (indexOfProductInCart < 0) {
      newCart.push({ product: payload, qty: 1 });
    } else {
      newCart[indexOfProductInCart].qty += 1;
    }

    setState({
      ...state,
      cart: newCart,
    });
  };

  const removeFromCart = (payload) => {
    const newCart = [...state.cart];

    const indexOfProductInCart = newCart.findIndex(
      ({ product }) => product.id === payload.id,
    );

    if (newCart[indexOfProductInCart].qty === 1) {
      newCart.splice(indexOfProductInCart, 1);
    } else {
      newCart[indexOfProductInCart].qty -= 1;
    }

    setState({
      ...state,
      cart: newCart,
    });
  };

  const addToBuyer = (payload) => {
    setState({ ...state, buyer: [...state.buyer, payload] });
  };

  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    state,
  };
};

export default useInitialState;
