import React, { Fragment } from "react"
import Link from "next/link"
import styled from "styled-components"

import Layout from "./Layout"

const StyledLink = styled(Link)`
  color: #1b5e20;
`

const HomePage = () => (
  <Layout>
    <h2>Countries</h2>
    <p>
      A country is not only a self-governed nation with its own authorities, but
      this status needs the international diplomatic recognition of sovereignty.
    </p>
    <p>
      Check out our <StyledLink href="/countries">list of countries</StyledLink>
    </p>
  </Layout>
)

export default HomePage
