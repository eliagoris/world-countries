import React from "react"
import { useQuery } from "@apollo/react-hooks"
import styled from "styled-components"

import LoadingIcon from "./LoadingIcon"
import { GET_COUNTRIES_QUERY } from "../queries/countries"

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

const StyledParagraph = styled.p`
  margin: 0 0 0.5em 0;
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

const LoadingContainer = styled.div`
  padding: 4em 0.5em;
  text-align: center;
`

const TableContent = styled.div`
  max-height: 40em;
  overflow-y: overlay;
`

const CountriesListPage = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES_QUERY)

  if (error) return <p>Unfortunately, an error occured. Please try again</p>

  return (
    <div>
      <h3>Countries listing</h3>
      <Table>
        <HeaderTableRow>
          <HeaderTableCell width={"40%"}>Name</HeaderTableCell>
          <HeaderTableCell width={"40%"}>Languages</HeaderTableCell>
          <HeaderTableCell width={"20%"}>Continent</HeaderTableCell>
        </HeaderTableRow>
        {loading ? (
          <LoadingContainer>
            <LoadingIcon color="#1b5e20" />
          </LoadingContainer>
        ) : (
          <TableContent>
            {data.countries.map(({ name, languages, continent }) => (
              <TableRow key={name}>
                <TableCell width={"40%"}>{name}</TableCell>
                <TableCell width={"40%"}>
                  {languages.map(language => (
                    <StyledParagraph key={language.name}>
                      {language.name} <br />
                      Native: <b>{language.native}</b>
                    </StyledParagraph>
                  ))}
                </TableCell>
                <TableCell width={"20%"}>{continent.code}</TableCell>
              </TableRow>
            ))}
          </TableContent>
        )}
      </Table>
    </div>
  )
}

export default CountriesListPage
