import styled from 'styled-components';

export const StyledTitle = styled.h2`
  font-size: 6rem;
  font-weight: 300;
  text-align: center;
  margin: 4rem 0;
  text-shadow: 5px 5px 25px #999;
`;

export const StyledUl = styled.ul`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  position: relative;
  background-color: var(--complement);
  padding: 1rem 0;

  & li {
    margin: 0 8rem;
    cursor: pointer;
    font-size: 1.6rem;
    background-color: transparent;
    border-bottom: 1px solid transparent;
    padding: 0.3 0.8rem;
    transition: border-color 0.3s ease;

    & span {
      color: var(--main);
    }
  }

  & li:hover {
    border-color: var(--main);
  }
`;

export const StyledSlider = styled.div`
  display: flex;
  width: 60%;
  margin: 5rem 0;
  margin-left: 12.5%;

  & * {
    padding: 0.7rem 2rem;
  }
`;

export const SliderItem = styled.div`
  border-radius: 5px;
  box-shadow: 0 1px 3px #333;
  margin: 0 3rem;
  min-width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;

  &:hover {
    box-shadow: 0 1px 5px #222;
    cursor: pointer;
  }

  & img {
    width: 20rem;
  }

  & h3 {
    font-size: 1.5rem;
  }

  & h4 {
    font-size: 1.2rem;
    font-weight: 400;
  }

  & h5 {
    font-weight: 400;
    font-size: 1.2rem;
  }

  & span {
    font-size: 1.4rem;
    color: rgb(14, 62, 2, 1);
  }

  & button {
    cursor: pointer;
    width: 100%;
    border: 1px solid #777;
    border-radius: 4px;
  }

  & button:hover {
    background: transparent;
  }
`;
