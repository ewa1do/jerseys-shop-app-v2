import { useContext } from 'react';
import { StyledItem } from '../items/styles';

import { CartContext } from '../../context/cartContext';
import { CartItem } from './CartItem';

export const CartScreen = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2 className='section-title'>Cart</h2>

      <ul>
        {cart.map(items => {
          return (
            <StyledItem key={items.id}>
              <CartItem {...items} />
            </StyledItem>
          );
        })}
      </ul>
    </div>
  );
};