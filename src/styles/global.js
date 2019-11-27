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

html, body, #root{
  min-height: 100%;
}

  
body {
    
  /** ajuda a deixar a font com resolução melhor  */
  -webkit-font-smoothing: antialiased !important;
}

button {
  cursor: pointer;
}
`;
