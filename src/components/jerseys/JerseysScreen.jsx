import { jerseysDB } from '../../data/items';
import { ItemList } from '../items/ItemList';

export const JerseysScreen = () => {
  return (
    <div>
      <h2 className='section-title'>Jerseys</h2>
      <ItemList items={jerseysDB} />
    </div>
  );
};
