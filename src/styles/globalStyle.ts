import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Roboto:wght@100;400;700&display=swap');
        font-family: 'Roboto', 'Poppins',sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0; 

} 

  *, *::before, *::after {
    box-sizing: border-box;
  }

body{
        background-color: #d1d6de;
    scroll-behavior: smooth;

}
::-webkit-scrollbar {
  width: 3px;
  height: 4px;
}

::-webkit-scrollbar-track {
  background: #cacaca ;
}

::-webkit-scrollbar-thumb {
  background: rgba(68, 67, 90, 0.7);
}
a {
    text-decoration:none;
  }
 



`

export const GlobalStyles = createGlobalStyle`
 


 

 

  `
