import { useContext } from 'react';
import { v4 as uuid } from 'uuid';

import { types } from '../../types/types';
import { CartContext } from '../../context/cartContext';

export const SliderItemComponent = items => {
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
    <>
      <img src={items.url} />
      <h3>{items.name}</h3>
      <h4>{items.description || items.brand}</h4>
      {items.league && <h5>{items.league}</h5>}
      <span>US$ {items.price}</span>
      <button onClick={handleShoppingCart}>Add To Cart</button>
    </>
  );
};
