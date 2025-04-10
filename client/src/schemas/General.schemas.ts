import { gql } from "@apollo/client";

export const GET_ALL_RESSOURCE = gql`
query GetAll($search: String!, $asc: String!, $sort: String!, $name: String!) {
  getAll(search: $search, asc: $asc, sort: $sort, name: $name) {
    id
    image_url
    image_alt
    title
  }
}
`;