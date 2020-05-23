import { gql } from 'apollo-boost';

export default TAG_VIEW_ALL = gql`
query tags{
      id
      name
      projects {
          project {
              id
              name
          }
      }
      isUsed 
      createdAt
      updatedAt
    }`;

export default TAG_GET_ALL = gql`
query GetAllTags($id: ID!) {
    tags(where:{id:$id}) {
      id
      name
      projects {
          project {
              id 
              name
          }
      }
      isUsed
      createdAt
      updatedAt
    }
  }`;

export default TAG_GET_SINGLE = gql`
query GetSingleTag($tag: ID!) {
    tag(where:{id:$tag}) {
      id
      name
      projects {
          project {
              id 
              name
          }
      }
      isUsed
      createdAt
      updatedAt
    }
  }`;