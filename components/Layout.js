import React, { Fragment } from "react"
import styled from "styled-components"

import Header from "../components/Header"

const Container = styled.section`
  max-width: 60em;
  margin: 0 auto;
  padding: 1em 1.5em;
  height: 100%;
`

const Layout = props => (
  <Fragment>
    <Header />

    <Container>{props.children}</Container>
  </Fragment>
)

export default Layout
