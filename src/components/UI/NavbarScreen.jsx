import { Link } from 'react-router-dom';
import { NavStyled, UlStyled } from './styles.js';

export const Navbar = () => {
  return (
    <NavStyled>
      <UlStyled>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/jerseys'>Jerseys</Link>
        </li>
        <li>
          <Link to='/shoes'>Shoes</Link>
        </li>
        <li>
          <Link to='footballs'>Footballs</Link>
        </li>
      </UlStyled>
    </NavStyled>
  );
};
