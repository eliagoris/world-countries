import React, { Fragment } from "react"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

import Header from "../components/Header"

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
    margin: 0;
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
    text-decoration: none;
    cursor: pointer
  }

  a, p, span {
    color: #363636;
    line-height: 1.5
  }

  h1, h2, h3 {
    color: #1d1d1d;
  }
`

const Container = styled.section`
  max-width: 60em;
  margin: 0 auto;
  padding: 1em 1.5em;
  height: 100%;
`

const Layout = props => (
  <Fragment>
    <GlobalStyle />
    <Header />

    <Container>{props.children}</Container>
  </Fragment>
)

export default Layout
