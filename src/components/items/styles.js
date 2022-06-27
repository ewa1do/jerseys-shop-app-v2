import styled from 'styled-components';

export const StyledItem = styled.li`
  display: flex;
  padding: 2rem;
  border: 1px solid #333;
  margin: 2rem 0.5rem 1rem 0.5rem;

  & * {
    padding: 0.5rem 0;
  }

  & img {
    width: 20rem;
  }

  & div {
    padding: 0 3rem;
    display: flex;
    flex-direction: column;
  }

  & h3 {
    font-size: 2rem;
    font-weight: 400;
  }

  & h4 {
    font-size: 1.3rem;
    font-weight: 400;
  }

  & .span-price {
    font-size: 2rem;
    margin-top: 3rem;
  }

  & button {
    margin-top: 2rem;
    max-width: 20rem;
    cursor: pointer;
  }
`;
