import React, { Fragment } from "react"
import { Link } from "react-router-dom"

const ErrorPage = () => (
  <Fragment>
    <h1>404 - This page doesn't exist.</h1>
    <Link to="/">Go home</Link>
  </Fragment>
)

export default ErrorPage
