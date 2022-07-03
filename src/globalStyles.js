import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap');
  
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --main: #d9e4dd;
  --secondary: #fbf7f0;
  --shadows: #cdc9c3;
  --contrast: #555555;
  --complement: #f24c4c;
  --complement-rgb: 242, 76, 76;
}

html {
  font-size: 62.5%;
  font-family: 'Montserrat', sans-serif;
  background: #edf2ef;
}

ul {
  list-style: none;
}

h3 {
  font-size: 2.2rem;
  font-weight: 400;
}

.section-title {
  font-size: 5rem;
  font-weight: 400;
  text-align: center;
  margin: 3rem 0;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  border-bottom: 2px solid var(--complement);
  top: 0;
  width: 22%;
  left: 39%;
  bottom: 0;
}
`;
