import React, { Fragment } from "react"
import { useQuery } from "@apollo/react-hooks"
import Link from "next/link"
import styled from "styled-components"
import { useRouter } from "next/router"

import LoadingIcon from "./LoadingIcon"
import Layout from "./Layout"
import { GET_COUNTRY_BY_ID } from "../queries/countries"

const StyledLink = styled.a`
  display: block;
  margin: 0.8em 0;
  color: #1b5e20;
`

const CountryPage = () => {
  const router = useRouter()
  const { code } = router.query

  const { loading, error, data } = useQuery(GET_COUNTRY_BY_ID, {
    variables: {
      code
    }
  })

  return (
    <Layout>
      {loading ? (
        <LoadingIcon color="#1b5e20" />
      ) : error ? (
        <p>An error occured. Please try again</p>
      ) : data.country ? (
        <Fragment>
          <h2>
            {data.country.name} {data.country.emoji}
          </h2>
          <p>Currency: {data.country.currency}</p>
          <p>Area code(phone): {data.country.phone}</p>
          <p>Continent: {data.country.continent.name}</p>
        </Fragment>
      ) : (
        <p>No country were found with this code.</p>
      )}
      <Link href="/countries">
        <StyledLink>Back to countries list</StyledLink>
      </Link>
    </Layout>
  )
}

export default CountryPage
