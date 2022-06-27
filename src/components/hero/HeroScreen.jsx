import React from 'react';
import styled from 'styled-components';

const Hero = styled.header`
  background-image: url('../../../assets/img/hero.jpg');
  background-position: center;
  background-size: cover;
  height: 80vh;
`;

export const HeroScreen = () => {
  return <Hero></Hero>;
};
