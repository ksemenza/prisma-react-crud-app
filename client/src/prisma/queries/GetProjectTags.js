import { gql } from "apollo-boost";

export const PROJECT_TAGS_VIEW_ALL = gql`
  query projectTagElements {
    project {
      id
      name
          }
    tag {
        id
        name
        }
  }
`;

export const PROJECT_TAGS_GET_SINGLE = gql`
  query GetSingleProjectTagElement($projectTagId: ID!) {
    projectTagElement(where: { id: $projectTagId }) {
      id
        project {
          id
          name
        }
       tag {
           id
           name
       }
      createdAt
      updatedAt
    }
  }
`;


export const PROJECT_TAGS_GET_ALL = gql`
  query GetAllProjectTagElements($id: ID!) {
    projectTagElements(where: { id: $id }) {
      id
        project {
          id
          name
        }
       tag {
           id
           name
       }
      createdAt
      updatedAt
    }
  }
`;
