import React from 'react';
import styled from 'styled-components';
import { Navbar } from '../UI/NavbarScreen';

const Hero = styled.header`
  background-image: url('../../../assets/img/hero.jpg');
  background-position: center;
  background-size: cover;
  height: 100vh;
`;

export const HeroScreen = () => {
  return (
    <>
      <h1>Hero</h1>
    </>
  );
};
