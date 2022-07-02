import { bootsItems } from '../../data/items.js';
import { ItemList } from '../items/ItemList';
import { Navbar } from '../UI/NavbarScreen';

export const ShoesScreen = () => {
  return (
    <div>
      <Navbar />
      <h2 className='section-title'>Boots</h2>
      <ItemList items={bootsItems} />
    </div>
  );
};
