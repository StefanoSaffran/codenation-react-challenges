import { createGlobalStyle } from 'styled-components';

import 'react-toggle/style.css';

export default createGlobalStyle`
* {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
  }
*:focus {
    outline: 0;
  }

html {
  font-size: 10px;
}

body {
  padding-top: 60px;
  font-family: 'Open Sans', sans-serif;
  background-color: ${({ theme }) => theme.colors.background};
  color: #000;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: #000;
  font-weight: bold;
}

button {
  background-color: transparent;
  border: none;
  box-shadow: none;
  outline: none;
}

.container {
  width: 100%;
  margin: 0 auto;
}

@media screen and (min-width: 960px) {
  .container {
    width: 960px;
  }
}

::placeholder {
  color: #9FA9BC;
  font-weight: normal;
}

`;