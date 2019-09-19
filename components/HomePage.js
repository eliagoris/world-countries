import React from "react"
import Link from "next/link"
import styled from "styled-components"

import Layout from "./Layout"

const StyledLink = styled.a`
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
      Check out our{" "}
      <Link href="/">
        <StyledLink>list of countries</StyledLink>
      </Link>
    </p>
  </Layout>
)

export default HomePage
