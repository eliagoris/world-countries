import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import styled from "styled-components"

import Header from "../components/Header"
import HomePage from "../components/HomePage"
import CountriesListPage from "../components/CountriesListPage"
import CountryPage from "../components/CountryPage"
import ErrorPage from "../components/ErrorPage"

const Container = styled.section`
  max-width: 60em;
  margin: 0 auto;
  padding: 1em 1.5em;
  height: 100%;
`

const AppRouter = () => (
  <BrowserRouter>
    <Header />

    <Container>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/countries" exact component={CountriesListPage} />
        <Route path="/countries/:code" component={CountryPage} />
        <Route component={ErrorPage} />
      </Switch>
    </Container>
  </BrowserRouter>
)

export default AppRouter
