import { Slider } from './Slider';
import { jerseysDB, bootsItems } from '../../data/items.js';
import { highLightedItems } from '../../helpers/helpers';

export const LayoutScreen = () => {
  return (
    <div>
      <Slider items={highLightedItems(jerseysDB)} />
    </div>
  );
};
