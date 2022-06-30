import React from 'react';
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
    </>
  );
};
