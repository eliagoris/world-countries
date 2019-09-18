import { gql } from "apollo-boost"

const GET_COUNTRIES_QUERY = gql`
  query {
    countries {
      name
      continent {
        code
      }
      languages {
        name
        native
      }
    }
  }
`

export { GET_COUNTRIES_QUERY }
