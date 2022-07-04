import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { types } from '../../types/types';
import { CartContext } from '../../context/cartContext';
import { PaymentForm } from './PaymentForm';
import { PaymentStyled } from './styles.js';

export const PaymentScreen = () => {
  const { cart, dispatch } = useContext(CartContext);
  const { state } = useLocation();
  const { total = '' } = state || {};

  const navigate = useNavigate();

  const handleReturnToPreviousScreen = () => {
    navigate(-1);
  };

  const handlePaymentSuccess = () => {
    alert('Payment Successfully Submited');

    dispatch({
      type: types.clear,
      payload: cart,
    });

    navigate('/');
  };

  return (
    <PaymentStyled>
      <h2>Make Your Payment</h2>
      <h4>Contact Details: </h4>
      <PaymentForm />
      <div>
        <h5>Items Qty: {cart.length}</h5>
        <h5>Total: {total}</h5>
      </div>
      <div>
        <button onClick={handleReturnToPreviousScreen}>
          Keep Shopping
        </button>
        <button onClick={handlePaymentSuccess}>Pay now!</button>
      </div>
    </PaymentStyled>
  );
};
