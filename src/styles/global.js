import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  --primary: #7159c1;
  --primaryDark: #332c63;
  --primaryLight: #a594ea;
  --accent: #3ef277;
  --accentDark: #34ca63;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  min-height: 100%;
  font-family: "Helvetica Neue", "Helvetica", Arial, sans-serif;
  /* Font fica menos pixada */
  text-rendering: optimizeLegibility !important;
  /** ajuda a deixar a font com resolução melhor  */
  -webkit-font-smoothing: antialiased !important;
}

  
body {
  background: rgb(31,25,122);
background: linear-gradient(90deg, rgba(31,25,122,1) 0%, rgba(9,54,121,1) 23%, rgba(0,212,255,1) 100%);
}

button {
  cursor: pointer;
}

.container {
  button {
    margin-left: 50em;
    padding: 10px;
  }
}
`;
