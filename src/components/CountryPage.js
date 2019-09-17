import React from "react"

import { Link } from "react-router-dom"

const CountryPage = ({
  match: {
    params: { code }
  }
}) => (
  <div>
    <Link to="/">back to home</Link>
    <p>this is the country of code {code}</p>
  </div>
)

export default CountryPage
