import { useContext } from 'react';
import { StyledItem, EmptyContentH3 } from '../items/styles';

import { Navbar } from '../UI/NavbarScreen';
import { CartContext } from '../../context/cartContext.js';
import { CartItem } from './CartItem';

export const CartScreen = () => {
  const { cart } = useContext(CartContext);

  const handleTotalCartPrice = () => {
    return cart.reduce((acc, item) => acc + item.price, 0) || '';
  };

  const result = handleTotalCartPrice();

  return (
    <div>
      <Navbar />
      <h2 className='section-title'>Cart</h2>

      {cart.length > 0 ? (
        <>
          <ul>
            {cart.map(items => {
              return (
                <StyledItem key={items.id}>
                  <CartItem {...items} />
                </StyledItem>
              );
            })}
          </ul>
          <h3>Total: {result}</h3>
        </>
      ) : (
        <EmptyContentH3>
          Wow such empty, add some items!
        </EmptyContentH3>
      )}
    </div>
  );
};
