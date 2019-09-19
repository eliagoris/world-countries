import React, { Fragment } from "react"
import { createGlobalStyle } from "styled-components"
import { ApolloClient } from "apollo-client"
import { ApolloProvider } from "@apollo/react-hooks"
import fetch from "node-fetch"
import { createHttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"

import Layout from "../components/Layout"

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

const link = createHttpLink({
  uri: "https://countries.trevorblades.com",
  fetch: fetch
})

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
})

const App = () => (
  <Fragment>
    <GlobalStyle />
    <ApolloProvider client={client}>
      <Layout />
    </ApolloProvider>
  </Fragment>
)

export default App
