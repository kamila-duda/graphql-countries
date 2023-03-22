import { graphql } from "@/types/gql";

export const GET_COUNTRIES_QUERY = graphql(`
  query GetCountries {
    countries {
      code
      name
    }
  }
`);

export const GET_COUNTRY_QUERY = graphql(`
  query GetCountry($code: ID!) {
    country(code: $code) {
      code
      name
      emoji
      languages {
        name
      }
    }
  }
`);
