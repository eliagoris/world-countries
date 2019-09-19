import { gql } from "apollo-boost"

const GET_COUNTRIES = gql`
  query {
    countries {
      code
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

const GET_COUNTRY_BY_ID = gql`
  query country($code: String) {
    country(code: $code) {
      name
    }
  }
`

export { GET_COUNTRIES, GET_COUNTRY_BY_ID }
