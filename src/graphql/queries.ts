import { gql } from "@apollo/client";

export const GET_CHARACTER = gql`
  query GetCharacter {
    characters {
      info {
        next
        prev
      }
      results {
        id
        name
        status
        image
        type
        location {
          name
          dimension
        }
        origin {
          name
          dimension
        }
      }
    }
  }
`;
