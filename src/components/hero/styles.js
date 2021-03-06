import styled from 'styled-components';

export const Hero = styled.header`
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.65)
    ),
    url('../../../assets/img/hero-2.jpg');
  background-position: center;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled.div`
  color: var(--secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: 0 auto;
  margin-top: 20rem;

  & * {
    padding: 0.3rem 0;
  }

  & h2,
  & h3,
  & h4 {
    font-weight: 400;
  }

  & h2 {
    font-size: 4.5rem;
    position: relative;
  }

  & h2::after {
    content: '';
    top: 0;
    left: -5%;
    bottom: 0;
    border-bottom: 2px solid var(--complement);
    width: 110%;
    position: absolute;
  }

  & h3 {
    font-size: 2.2rem;
    text-align: center;
  }

  & h4 {
    font-size: 2rem;
    margin-left: 40%;
  }

  & button {
    text-align: center;
    background-color: transparent;
    border: 1px solid var(--secondary);
    border-radius: 5px;
    color: var(--secondary);
    cursor: pointer;
    font-size: 1.6rem;
    font-weight: 400;
    margin-top: 10rem;
    padding: 1.3rem 5rem;
    transition: all 0.3s ease;
  }

  & button:hover {
    border-color: var(--complement);
  }
`;
