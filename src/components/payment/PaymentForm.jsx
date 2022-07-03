export const PaymentForm = () => {
  return (
    <form>
      <div>
        <label>Full Name</label>
        <input type='text' />
      </div>
      <div>
        <label>Email Address</label>
        <input type='email' />
      </div>
      <div>
        <h5>Debit/Credit Card</h5>

        <label>Card Number</label>
        <input type='text' />

        <label>MM/YY</label>
        <input type='text' />

        <label>Security code</label>
        <input type='text' />
      </div>
    </form>
  );
};
