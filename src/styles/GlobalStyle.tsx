import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`   
    ${({ theme }) => css`       
        body {
            margin: 0;
            font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;

            background-color: ${theme.ColorNeutralSurface01};
            color: ${theme.ColorNeutralElements03};
        }
    `};
`