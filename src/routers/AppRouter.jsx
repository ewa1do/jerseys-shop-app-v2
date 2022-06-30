import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CartScreen } from '../components/cart/cartScreen';
import { FootballsScreen } from '../components/footballs/FootballsScreen';
import { HeroScreen } from '../components/hero/HeroScreen';
import { JerseysScreen } from '../components/jerseys/JerseysScreen';
import { ShoesScreen } from '../components/shoes/ShoesScreen';
import { Navbar } from '../components/UI/NavbarScreen';

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
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
          <Route
            path='/cart'
            element={<CartScreen />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
