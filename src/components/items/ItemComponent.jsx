import { StyledItem } from './styles.js';

export const ItemComponent = ({
  url,
  name,
  description,
  league,
  price,
}) => {
  return (
    <StyledItem>
      <img src={url} />
      <div>
        <h3>{name}</h3>
        <h4>{description}</h4>
        <span>US$ {price}</span>
        <button>Add To Cart</button>
      </div>
    </StyledItem>
  );
};
