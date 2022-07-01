import styled from 'styled-components';

export const StyledUl = styled.ul`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  position: relative;
  background-color: var(--complement);
  padding: 1rem 0;

  & li {
    margin: 0 8rem;
    cursor: pointer;
    font-size: 1.6rem;
    background-color: transparent;
    border-bottom: 1px solid transparent;
    padding: 0.3 0.8rem;
    transition: border-color 0.3s ease;

    & span {
      color: var(--main);
    }
  }

  & li:hover {
    border-color: var(--main);
  }
`;
