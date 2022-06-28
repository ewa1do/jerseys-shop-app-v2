import { bootsItems } from '../../data/items.js';
import { ItemList } from '../items/ItemList';

export const ShoesScreen = () => {
  return (
    <div>
      <h2 className='section-title'>Boots</h2>
      <ItemList items={bootsItems} />
    </div>
  );
};
