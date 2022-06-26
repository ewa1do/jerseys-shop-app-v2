import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { FootballsScreen } from '../components/footballs/FootballsScreen';
import { HeroScreen } from '../components/hero/HeroScreen';
import { JerseysScreen } from '../components/jerseys/JerseysScreen';
import { ShoesScreen } from '../components/shoes/ShoesScreen';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<HeroScreen />}
        />
        <Route
          path='/jerseys'
          element={<JerseysScreen />}
        />
        <Route
          path='/shoes'
          element={<ShoesScreen />}
        />
        <Route
          path='/footballs'
          element={<FootballsScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
};
