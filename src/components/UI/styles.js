import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavStyled = styled.nav`
  background-color: #2c3e50;
  padding: 1rem 0;
  /* box-shadow: 0 10px 5px #fff; */
`;

export const UlStyled = styled.ul`
  display: flex;
  justify-content: space-around;

  & li {
    font-size: 1.4rem;
    transition: all 0.3s ease;
    border-bottom: 1px solid transparent;
  }
  & li:hover {
    border-bottom: 1px solid #8e44ad;
  }
`;

export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;
