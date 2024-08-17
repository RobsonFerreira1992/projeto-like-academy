import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

/* poppins-300 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  src: url('../fonts/poppins/poppins-v20-latin-300.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/poppins/poppins-v20-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/poppins/poppins-v20-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/poppins/poppins-v20-latin-300.woff') format('woff'), /* Modern Browsers */
       url('../fonts/poppins/poppins-v20-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/poppins/poppins-v20-latin-300.svg#Poppins') format('svg'); /* Legacy iOS */
}
/* poppins-regular - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/poppins/poppins-v20-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/poppins/poppins-v20-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/poppins/poppins-v20-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/poppins/poppins-v20-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../fonts/poppins/poppins-v20-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/poppins/poppins-v20-latin-regular.svg#Poppins') format('svg'); /* Legacy iOS */
}
/* poppins-700 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  src: url('../fonts/poppins/poppins-v20-latin-700.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/poppins/poppins-v20-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/poppins/poppins-v20-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/poppins/poppins-v20-latin-700.woff') format('woff'), /* Modern Browsers */
       url('../fonts/poppins/poppins-v20-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/poppins/poppins-v20-latin-700.svg#Poppins') format('svg'); /* Legacy iOS */
}

@font-face {
  font-family: 'Gill Sans';
  src: url('../fonts/gillSans/Gill-Sans.otf');
  font-weight: normal;
  font-style: normal;
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  p{
    font-size: 16px;
  }
  html, body, #__next {
    height: 100%;
  }
  body, * {
    font-family: Poppins, sans-serif  !important

  }
  :root{
  color-scheme: only light;

  }


`

export default GlobalStyles
