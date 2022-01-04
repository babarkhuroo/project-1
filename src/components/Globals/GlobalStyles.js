import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyles = createGlobalStyle`
    ${normalize}
    
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    body {
        font-family: 'Noto Kufi Arabic', sans-serif, serif;
        font-size: 1.6rem;
    }

    a {
        color: #000;
        text-decoration: none;
    }
    
    li {
        list-style: none;
    }
`
