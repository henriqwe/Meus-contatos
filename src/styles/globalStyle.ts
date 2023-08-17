import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Roboto:wght@100;400;700&display=swap');
        font-family: 'Roboto', 'Poppins',sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0; 
} 

body{
        background-color: #F1F5F9;
}
::-webkit-scrollbar {
  width: 2px;
  height: 4px;
}

/* aqui é para personalizar o fundo da barra, neste caso estou colocando um fundo cinza escuro*/
::-webkit-scrollbar-track {
  background: #cacaca ;
}

/* aqui é a alça da barra, que demonstra a altura que você está na página
estou colocando uma cor azul clara nela*/
::-webkit-scrollbar-thumb {
  background: rgba(68, 67, 90, 0.7);
}
`
