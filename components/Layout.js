import React, { Fragment } from "react"
import styled from "styled-components"
import { Switch, Route } from "react-router-dom"

import Header from "../components/Header"
import componentRegistry from "../libs/componentRegistry"
import routes from "../routers/routes.json"

const Container = styled.section`
  max-width: 60em;
  margin: 0 auto;
  padding: 1em 1.5em;
  height: 100%;
`

const Layout = () => (
  <Fragment>
    <Header />

    <Container>
      <Switch>
        {routes.map(({ path, exact, component }, index) => (
          <Route
            key={index}
            path={path}
            exact={exact}
            component={componentRegistry[component]}
          />
        ))}
      </Switch>
    </Container>
  </Fragment>
)

export default Layout
