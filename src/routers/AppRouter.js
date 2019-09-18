import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import styled from "styled-components"

import Header from "../components/Header"
import HomePage from "../components/HomePage"
import CountriesListPage from "../components/CountriesListPage"
import CountryPage from "../components/CountryPage"
import ErrorPage from "../components/ErrorPage"
import routes from "./routes.json"

const Container = styled.section`
  max-width: 60em;
  margin: 0 auto;
  padding: 1em 1.5em;
  height: 100%;
`

const componentRegistry = {
  HomePage,
  CountriesListPage,
  CountryPage,
  ErrorPage
}

const AppRouter = () => (
  <BrowserRouter>
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
  </BrowserRouter>
)

export default AppRouter
