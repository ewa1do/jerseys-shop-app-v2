import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { types } from '../../types/types';

export const CartItem = ({
  id,
  name,
  url,
  description,
  league,
  price,
  brand,
}) => {
  const { dispatch } = useContext(CartContext);

  const handleRemoveCartItem = () => {
    dispatch({
      type: types.delete,
      payload: id,
    });
  };

  return (
    <>
      <img src={url} />
      <div>
        <h3>{name}</h3>
        <h4>{description || brand}</h4>
        {league && <h5>{league}</h5>}
        <span>US$ {price}</span>
        <button onClick={handleRemoveCartItem}>Remove</button>
      </div>
    </>
  );
};
