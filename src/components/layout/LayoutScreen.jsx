import { useState } from 'react';

import { StyledUl, StyledTitle } from './styles.js';

import {
  jerseysDB,
  bootsItems,
  ballsItems,
} from '../../data/items.js';

import { Slider } from './Slider';
import { highLightedItems } from '../../helpers/helpers';

export const LayoutScreen = () => {
  const [items, setItems] = useState(
    highLightedItems(jerseysDB)
  );

  const handleItemsReturnedByClick = ({ target }) => {
    if (!target.closest('span')) return;

    const itemsData = target.getAttribute('datatype');
    const parsedData = highLightedItems(JSON.parse(itemsData));
    setItems(parsedData);
  };

  return (
    <div>
      <StyledTitle>Most Selled Items</StyledTitle>
      <nav>
        <StyledUl onClick={handleItemsReturnedByClick}>
          <li>
            <span datatype={JSON.stringify(jerseysDB)}>
              Jerseys
            </span>
          </li>
          <li>
            <span datatype={JSON.stringify(bootsItems)}>
              Boots
            </span>
          </li>
          <li>
            <span datatype={JSON.stringify(ballsItems)}>
              Footballs
            </span>
          </li>
        </StyledUl>
      </nav>

      <Slider items={items} />
    </div>
  );
};
