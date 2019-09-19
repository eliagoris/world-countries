import React, { Fragment } from "react"
import { createGlobalStyle } from "styled-components"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "@apollo/react-hooks"

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

  html, body, #root {
    height: 100%;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none
  }

  a, p, span {
    color: #363636;
    line-height: 1.5
  }

  h1, h2, h3 {
    color: #1d1d1d;
  }
`

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/"
})

const App = () => (
  <Fragment>
    <GlobalStyle />
    <ApolloProvider client={client}>
      <AppRouter />
    </ApolloProvider>
  </Fragment>
)

export default App
