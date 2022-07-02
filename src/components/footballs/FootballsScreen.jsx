import { ballsItems } from '../../data/items';
import { ItemList } from '../items/ItemList';
import { Navbar } from '../UI/NavbarScreen';

export const FootballsScreen = () => {
  return (
    <div>
      <Navbar />
      <h2 className='section-title'>Footballs</h2>
      <ItemList items={ballsItems} />
    </div>
  );
};
