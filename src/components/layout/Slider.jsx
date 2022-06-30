import { v4 as uuid } from 'uuid';

import styled from 'styled-components';

const StyledSlider = styled.div`
  display: flex;
  margin: 5rem 0;
  width: 60%;
  margin-left: 10%;

  & * {
    padding: 0 2rem;
  }
`;

const SliderItem = styled.div`
  & img {
    width: 10rem;
  }
`;

export const Slider = ({ items }) => {
  return (
    <StyledSlider>
      {items.map(item => {
        return (
          <SliderItem key={uuid()}>
            <img src={item.url} />
            <h3>{item.name}</h3>
            <h4>{item.description || item.brand}</h4>
            {item.league && <h5>{item.league}</h5>}
            <span>US$ {item.price}</span>
          </SliderItem>
        );
      })}
    </StyledSlider>
  );
};
