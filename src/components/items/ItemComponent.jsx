import { useContext } from 'react';
import { StyledItem } from './styles.js';
import { v4 as uuid } from 'uuid';

import { CartContext } from '../../context/cartContext';
import { types } from '../../types/types.js';

export const ItemComponent = items => {
  const { dispatch } = useContext(CartContext);

  const handleShoppingCart = () => {
    dispatch({
      type: types.add,
      payload: {
        ...items,
        id: uuid(),
      },
    });
  };

  return (
    <StyledItem>
      <img src={items.url} />
      <div>
        <h3>{items.name}</h3>
        <h4>{items.description || items.brand}</h4>
        <span>US$ {items.price}</span>
        <button onClick={handleShoppingCart}>Add To Cart</button>
      </div>
    </StyledItem>
  );
};
