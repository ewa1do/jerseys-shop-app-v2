import React from 'react';

import { FooterScreen } from '../footer/FooterScreen';
import { HeroTitle } from './HeroTitle';
import { LayoutScreen } from '../layout/LayoutScreen';
import { Navbar } from '../UI/NavbarScreen';

import { Hero } from './styles.js';

export const HeroScreen = () => {
  return (
    <>
      <Hero>
        <Navbar background='transparent' />
        <HeroTitle />
      </Hero>

      <LayoutScreen />
      <FooterScreen />
    </>
  );
};
