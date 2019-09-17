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
    color: #363636;
    text-decoration: none
  }

  h1,h2 {
    color: #1d1d1d;
  }
  
`

const App = () => (
  <Fragment>
    <GlobalStyle />
    <AppRouter />
  </Fragment>
)

export default App
