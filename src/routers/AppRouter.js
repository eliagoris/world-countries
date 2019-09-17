import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import HomePage from "../components/HomePage"
import CountriesListPage from "../components/CountriesListPage"
import CountryPage from "../components/CountryPage"
import ErrorPage from "../components/ErrorPage"

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/countries" exact component={CountriesListPage} />
      <Route path="/countries/:code" component={CountryPage} />
      <Route component={ErrorPage} />
    </Switch>
  </BrowserRouter>
)

export default AppRouter
