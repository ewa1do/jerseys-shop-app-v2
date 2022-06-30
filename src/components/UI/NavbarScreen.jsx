import { IoCartOutline, IoHomeOutline } from 'react-icons/io5';

import { NavStyled, UlStyled, StyledLink } from './styles.js';

export const Navbar = () => {
  return (
    <NavStyled>
      <UlStyled>
        <div>
          <li className='icon'>
            <StyledLink to='/'>
              <IoHomeOutline />
            </StyledLink>
          </li>
        </div>
        <div>
          <li>
            <StyledLink to='/jerseys'>Jerseys</StyledLink>
          </li>
          <li>
            <StyledLink to='/shoes'>Boots</StyledLink>
          </li>
          <li>
            <StyledLink to='/footballs'>Footballs</StyledLink>
          </li>
        </div>
        <div>
          <li className='icon'>
            <StyledLink to='/cart'>
              <IoCartOutline />
            </StyledLink>
          </li>
        </div>
      </UlStyled>
    </NavStyled>
  );
};
