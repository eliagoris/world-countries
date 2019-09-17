import React from "react"
import { Link } from "react-router-dom"

const ErrorPage = () => (
  <div>
    <h1>404 - This page doesn't exist.</h1>
    <Link to="/">Go home</Link>
  </div>
)

export default ErrorPage
