import { createGlobalStyle } from 'styled-components';
import mainBkgd from '../img/main_bkgd.png';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Asap', sans-serif;
}

html{
  color: #000000;
  background-color: #000000;
  overflow-y: scroll;
  background-image: url(${mainBkgd});
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
}
`;

export default GlobalStyle;
