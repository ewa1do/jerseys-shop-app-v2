import { jerseysDB } from '../../data/items';
import { ItemList } from '../items/ItemList';
import { Navbar } from '../UI/NavbarScreen';

export const JerseysScreen = () => {
  return (
    <div>
      <Navbar />
      <h2 className='section-title'>Jerseys</h2>
      <ItemList items={jerseysDB} />
    </div>
  );
};
