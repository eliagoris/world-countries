import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledLink = styled(Link)`
  color: #1b5e20;
`

const HomePage = () => (
  <Fragment>
    <h2>Countries</h2>
    <p>
      A country is not only a self-governed nation with its own authorities, but
      this status needs the international diplomatic recognition of sovereignty.
    </p>
    <p>
      Check out our <StyledLink to="/countries">list of countries</StyledLink>
    </p>
  </Fragment>
)

export default HomePage
