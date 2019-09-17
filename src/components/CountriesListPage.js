import React from "react"
import { useQuery } from "@apollo/react-hooks"

import { GET_COUNTRIES_QUERY } from "../queries/countries"

const CountriesListPage = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES_QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <div>
      <h2>Countries listing</h2>
      {data.countries.map(({ name }) => (
        <div key={name}>
          <p>{name}</p>
        </div>
      ))}
    </div>
  )
}

export default CountriesListPage
