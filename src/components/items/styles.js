import styled from 'styled-components';

export const StyledItem = styled.li`
  display: flex;
  padding: 2rem;
  border: 1px solid #333;
  border-radius: 4px;
  margin: 2rem 0.5rem 1rem 0.5rem;

  & * {
    padding: 0.5rem 0;
  }

  & img {
    width: 24rem;
  }

  & div {
    padding: 0 3rem;
    display: flex;
    flex-direction: column;
  }

  & h3 {
    font-size: 2.4rem;
    font-weight: 400;
  }

  & h4 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  & span {
    font-size: 2rem;
    margin-top: 3rem;
  }

  & button {
    border: 1px solid #999;
    border-radius: 4px;
    background-color: #fbf7f0;
    cursor: pointer;
    font-size: 1.4rem;
    margin-top: 4rem;
    max-width: 20rem;
    padding: 1.5rem 0;
    transition: all 0.3s ease-in;

    &:hover {
      background-color: #d9e4dd;
    }
  }
`;
