import styled from 'styled-components';

export const PaymentStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6rem;

  & * {
    margin: 1rem 0;
  }

  & h2 {
    font-size: 3rem;
    font-weight: 400;
  }

  & h4 {
    font-size: 1.8rem;
    font-weight: 400;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  .card-details {
    display: flex;
    flex-direction: column;
  }
`;
