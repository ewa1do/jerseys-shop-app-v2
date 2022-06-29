import { ballsItems } from '../../data/items';
import { ItemList } from '../items/ItemList';

export const FootballsScreen = () => {
  console.log(ballsItems);
  return (
    <div>
      <h2 className='section-title'>Footballs</h2>
      <ItemList items={ballsItems} />
    </div>
  );
};
