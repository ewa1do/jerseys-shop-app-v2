import React from 'react';
import { LayoutScreen } from '../layout/LayoutScreen';
import { Navbar } from '../UI/NavbarScreen';
import { HeroTitle } from './HeroTitle';

import { Hero } from './styles.js';

export const HeroScreen = () => {
  return (
    <>
      <Hero>
        <Navbar />
        <HeroTitle />
      </Hero>

      <LayoutScreen />
    </>
  );
};
