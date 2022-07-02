import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavStyled = styled.nav`
  padding: 1rem 0;
  background-color: #2c3e50;
`;

export const UlStyled = styled.ul`
  display: flex;
  justify-content: space-between;

  & div {
    display: flex;

    & li {
      border-bottom: 1px solid transparent;
      font-size: 1.8rem;
      margin: 0 4rem;
      padding: 0 0.5rem;
      transition: all 0.3s ease;
    }
    & li:hover {
      border-bottom: 1px solid var(--complement);
    }
  }

  .icon {
    border-color: var(--complement);
  }
  .icon:hover {
    border-color: var(--complement);
  }
`;

export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;
