import React, { Fragment } from "react"
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"

import AppRouter from "./routers/AppRouter"
import Header from "./components/Header"
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

const Container = styled.section`
  max-width: 60em;
  margin: 2em auto;
  padding: 4em;
`

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Header />
    <Container>
      <AppRouter />
    </Container>
  </Fragment>
)

export default App
