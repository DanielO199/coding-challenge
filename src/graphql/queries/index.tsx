import gql from 'graphql-tag';

export const GET_CONTINENTS = gql`
  query {
    continents {
      code
      name
    }
  }
`;

export const GET_COUNTRIES = gql`
  query Continent($code: ID!) {
    continent(code: $code) {
      code
      name
      countries {
        name
        emoji
        languages {
          name
        }
      }
    }
  }
`;
