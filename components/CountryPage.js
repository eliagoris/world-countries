import React, { Fragment } from "react"
import { useQuery } from "@apollo/react-hooks"
import { Link } from "react-router-dom"
import styled from "styled-components"

import LoadingIcon from "./LoadingIcon"
import { GET_COUNTRY_BY_ID } from "../queries/countries"

const StyledLink = styled(Link)`
  display: block;
  margin: 0.8em 0;
  color: #1b5e20;
`

const CountryPage = ({
  match: {
    params: { code }
  }
}) => {
  const { loading, error, data } = useQuery(GET_COUNTRY_BY_ID, {
    variables: {
      code
    }
  })

  return (
    <Fragment>
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
      <StyledLink to="/countries">Back to countries list</StyledLink>
    </Fragment>
  )
}
export default CountryPage
