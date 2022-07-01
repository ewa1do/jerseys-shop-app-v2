import { v4 as uuid } from 'uuid';

import { SliderItemComponent } from './SliderItem';
import { StyledSlider, SliderItem } from './styles';

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
