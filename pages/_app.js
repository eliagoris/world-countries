import React from "react"
import App from "next/app"

import { ApolloClient } from "apollo-client"
import { ApolloProvider } from "@apollo/react-hooks"
import fetch from "node-fetch"
import { createHttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"

const link = createHttpLink({
  uri: "https://countries.trevorblades.com",
  fetch: fetch
})

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
})

class ApolloApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    )
  }
}

export default ApolloApp
