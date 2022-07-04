import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.86);
  height: 6rem;
  padding: 0 4rem;

  & * {
    color: white;
  }

  & h3 {
    font-size: 1.7rem;
  }

  & div a {
    padding: 0 0.4rem;
    font-size: 1.5rem;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: all 0.4s ease;
  }

  & div a:hover {
    border-color: var(--complement);
  }

  & div a.name {
    border-color: var(--secondary);
    font-size: 1.7rem;
  }

  & div a.name:hover {
    color: var(--complement);
  }
`;
