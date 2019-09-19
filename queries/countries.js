import { gql } from "apollo-boost"

const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
      continent {
        name
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
      currency
      phone
      emoji
      continent {
        name
      }
    }
  }
`

export { GET_COUNTRIES, GET_COUNTRY_BY_ID }
