import React from "react"

const CountryPage = ({
  match: {
    params: { code }
  }
}) => (
  <div>
    <p>this is the country of code {code}</p>
  </div>
)

export default CountryPage
