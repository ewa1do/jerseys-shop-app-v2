import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import { PaymentForm } from './PaymentForm';

export const PaymentScreen = () => {
  const { cart } = useContext(CartContext);
  const { state } = useLocation();
  const { total = '' } = state || {};

  return (
    <div>
      <h2>Make Your Payment</h2>
      <h4>Contact Details: </h4>
      <PaymentForm />
      <div>
        <h5>Items Qty: {cart.length}</h5>
        <h5>Total: {total}</h5>
      </div>
    </div>
  );
};
