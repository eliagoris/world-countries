import { gql } from "apollo-boost"

const GET_COUNTRIES_QUERY = gql`
  {
    countries {
      name
    }
  }
`

export { GET_COUNTRIES_QUERY }
