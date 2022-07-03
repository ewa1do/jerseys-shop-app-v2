import { useEffect, useReducer } from 'react';

import { CartContext } from './context/cartContext';
import { cartReducer } from './context/cartReducer';
import { AppRouter } from './routers/AppRouter';
import { GlobalStyle } from './globalStyles';

const init = () => {
  // return (
  //   JSON.stringify(localStorage.getItem('cart')) || {
  //     data: false,
  //   }
  // );

  return [];
};

export const App = () => {
  const [cart, dispatch] = useReducer(cartReducer, {}, init);

  // useEffect(() => {
  //   if (!cart) return;

  //   localStorage.setItem('cart', JSON.stringify(cart));
  // }, [cart]);

  return (
    // * The context envelop (provides) a global state to the App
    <CartContext.Provider
      value={{
        cart,
        dispatch,
      }}
    >
      <AppRouter />
      <GlobalStyle />
    </CartContext.Provider>
  );
};
