import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
        box-sizing: border-box;
    }

    #root{
        width: 100vw;
        min-height: 100vw;
        display: flex;
        flex-direction: column;
        width: 100vw;
    }

    
`

export default GlobalStyle