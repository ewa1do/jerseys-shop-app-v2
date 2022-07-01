import { v4 as uuid } from 'uuid';
import styled from 'styled-components';

import { SliderItemComponent } from './SliderItem';

const StyledSlider = styled.div`
  display: flex;
  margin: 5rem 0;
  width: 60%;
  margin-left: 20%;

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
            <SliderItemComponent {...item} />
          </SliderItem>
        );
      })}
    </StyledSlider>
  );
};
