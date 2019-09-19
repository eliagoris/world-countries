import React, { Fragment, useState } from "react"
import styled from "styled-components"
import { Redirect } from "react-router"

import QueryTable from "./QueryTable"
import { GET_COUNTRIES } from "../queries/countries"

const StyledParagraph = styled.p`
  margin: 0 0 0.5em 0;
`

/**
 * JSON Schema for defining table properties
 */
const schema = {
  properties: {
    name: {
      title: "Name",
      width: "40%"
    },
    languages: {
      title: "Languages",
      width: "40%",
      /**
       * Function that receives data from query and renders the table cell content accordingly
       *
       * @param {Object} Data The data returned from GraphQL query
       */
      renderCell: ({ languages }) =>
        languages.map(({ name, native }) => (
          <StyledParagraph key={name}>
            {name} <br />
            Native: {native}
          </StyledParagraph>
        ))
    },
    continent: {
      title: "Continent",
      width: "20%",
      /**
       * Function that receives data from query and renders the table cell content accordingly
       *
       * @param {Object} Data The data returned from GraphQL query
       */
      renderCell: ({ continent }) => continent.code
    }
  }
}

const query = {
  /** name will be used for accessing query response */
  name: "countries",
  /** value is the GraphQL query */
  value: GET_COUNTRIES
}

/**
 * Component responsible for rendering the list of countries
 */
const CountriesListPage = () => {
  const [redirectToCode, setRedirectToCode] = useState(false)

  /**
   * Will be called when clicking on a table row. Responsible for redirecting the user to a country page by it's code
   * @param {Object} data The data from query response
   */
  const handleRowClick = ({ code }) => {
    setRedirectToCode(code)
  }

  if (redirectToCode)
    return <Redirect push to={`/countries/${redirectToCode}`} />

  return (
    <Fragment>
      <h3>Countries listing</h3>
      <p>
        A list of countries and the languages spoken in that country. Both in
        English and native languages. <br />
        Also the continent it is located in
      </p>
      <QueryTable onRowClick={handleRowClick} query={query} schema={schema} />
    </Fragment>
  )
}

export default CountriesListPage
