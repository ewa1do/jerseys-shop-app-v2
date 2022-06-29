import { NavStyled, UlStyled, StyledLink } from './styles.js';

export const Navbar = () => {
  return (
    <NavStyled>
      <UlStyled>
        <li>
          <StyledLink to='/'>Home</StyledLink>
        </li>
        <li>
          <StyledLink to='/jerseys'>Jerseys</StyledLink>
        </li>
        <li>
          <StyledLink to='/shoes'>Boots</StyledLink>
        </li>
        <li>
          <StyledLink to='/footballs'>Footballs</StyledLink>
        </li>
        <li>
          <StyledLink to='/cart'>Cart</StyledLink>
        </li>
      </UlStyled>
    </NavStyled>
  );
};
