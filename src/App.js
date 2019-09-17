import React, { Fragment } from "react"
import { createGlobalStyle } from "styled-components"

import AppRouter from "./routers/AppRouter"
import "normalize.css/normalize.css"

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Roboto', sans-serif;
    src: url("https://fonts.googleapis.com/css?family=Roboto&display=swap") format("opentype");
  }
  *, *:before, *:after {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
      text-decoration: none
  }
  
`

const App = () => (
  <Fragment>
    <GlobalStyle />
    <AppRouter />
  </Fragment>
)

export default App
