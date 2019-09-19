import React from "react"
import { useQuery } from "@apollo/react-hooks"
import styled from "styled-components"

import LoadingIcon from "./LoadingIcon"

const Table = styled.div`
  padding: 1em;
  border: 1px solid #e3e4e6;
`

const TableRow = styled.div`
  display: flex;

  &:not(:last-child) {
    border-bottom: 1px solid #e3e4e6;
  }

  &:hover {
    background: #f7f9fa;
    cursor: pointer;
    color: #1b5e20;
  }
`

const TableCell = styled.span`
  flex: 1 ${props => props.width};
  padding: 0.5em;

  font-size: 0.8em;
`

const HeaderTableRow = styled(TableRow)`
  &:hover {
    background: initial;
    color: initial;
    cursor: auto;
  }
`

const HeaderTableCell = styled(TableCell)`
  color: #a0a1a2;
`

const TableContent = styled.div`
  max-height: 40em;
  overflow-y: overlay;
`

/**
 * Renders the table header based on schema properties
 *
 * @param {Array} propertiesKeys The array of properties keys for accessing properties contents
 * @param {Object} properties The schema properties object for defining header elements
 */
const renderTableHeader = (propertiesKeys, properties) => (
  <HeaderTableRow>
    {propertiesKeys.map(propertyKey => {
      const currentProperty = properties[propertyKey]
      const { width, title } = currentProperty

      return (
        <HeaderTableCell key={propertyKey} width={width}>
          {title}
        </HeaderTableCell>
      )
    })}
  </HeaderTableRow>
)

/**
 * Component responsible for rendering a listing table
 *
 * @param {Object} schema The JSON schema what will be used for defining the table structure
 * @param {Object} query The query used for getting and populating data
 */
const QueryTable = ({ schema: { properties }, query }) => {
  const { loading, error, data } = useQuery(query.value)

  const propertiesKeys = Object.keys(properties)

  return (
    <Table>
      {renderTableHeader(propertiesKeys, properties)}
      {loading ? (
        <LoadingIcon color="#1b5e20" />
      ) : error ? (
        <p>An error occured. Please try again</p>
      ) : (
        <TableContent>
          {data[query.name].map((queryContent, i) => (
            <TableRow key={i}>
              {propertiesKeys.map(property => {
                const currentProperty = properties[property]
                const { width, renderCell } = currentProperty

                return (
                  <TableCell key={property} width={width}>
                    {renderCell
                      ? renderCell(queryContent)
                      : queryContent[property]}
                  </TableCell>
                )
              })}
            </TableRow>
          ))}
        </TableContent>
      )}
    </Table>
  )
}

export default QueryTable
