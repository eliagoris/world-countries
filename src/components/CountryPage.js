import React from "react"
import { useQuery } from "@apollo/react-hooks"

import LoadingIcon from "./LoadingIcon"
import { GET_COUNTRY_BY_ID } from "../queries/countries"

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

  if (loading) return <LoadingIcon color="#1b5e20" />

  const { country } = data
  return (
    <div>
      {error ? (
        <p>An error occured. Please try again</p>
      ) : country ? (
        <h2>{country.name}</h2>
      ) : (
        <p>No country were found with this code.</p>
      )}
    </div>
  )
}
export default CountryPage
