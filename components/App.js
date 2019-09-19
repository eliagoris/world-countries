import React, { Fragment } from "react"
import { createGlobalStyle } from "styled-components"
import ApolloClient, { InMemoryCache } from "apollo-boost"
import { ApolloProvider } from "@apollo/react-hooks"
import fetch from "node-fetch"
import { createHttpLink } from "apollo-link-http"

import AppRouter from "../routers/AppRouter"

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

const link = createHttpLink({ uri: "/graphql", fetch: fetch })
const client = new ApolloClient({
  link
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
