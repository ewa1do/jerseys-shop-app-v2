import styled from 'styled-components';
import { ItemComponent } from './ItemComponent';
import { v4 as uuid } from 'uuid';

const StyledUL = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 60%;
  flex-wrap: wrap;
  margin-top: 4rem;
  margin: 0 auto;
`;

export const ItemList = ({ items }) => {
  return (
    <StyledUL>
      {items.map(items => {
        return (
          <ItemComponent
            key={uuid()}
            {...items}
          />
        );
      })}
    </StyledUL>
  );
};
