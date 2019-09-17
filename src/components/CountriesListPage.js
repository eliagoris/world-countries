import React from "react"
import { useQuery } from "@apollo/react-hooks"

import LoadingIcon from "./LoadingIcon"
import { GET_COUNTRIES_QUERY } from "../queries/countries"

const CountriesListPage = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES_QUERY)

  if (error) return <p>Unfortunately, an error occured. Please try again</p>

  return (
    <div>
      <h3>Countries listing</h3>
      {loading ? (
        <LoadingIcon color="#1b5e20" />
      ) : (
        data.countries.map(({ name }) => (
          <div key={name}>
            <p>{name}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default CountriesListPage
