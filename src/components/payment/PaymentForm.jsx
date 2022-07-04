import { StyledForm } from './styles.js';

export const PaymentForm = () => {
  return (
    <StyledForm>
      <div>
        <label>Full Name</label>
        <input type='text' />
      </div>
      <div>
        <label>Email Address</label>
        <input type='email' />
      </div>
      <div className='card-details'>
        <h5>Debit/Credit Card</h5>

        <div>
          <label>Card Number</label>
          <input type='text' />
        </div>

        <div>
          <label>MM/YY</label>
          <input type='text' />
        </div>

        <div>
          <label>Security code</label>
          <input type='text' />
        </div>
      </div>
    </StyledForm>
  );
};
