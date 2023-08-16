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
`
