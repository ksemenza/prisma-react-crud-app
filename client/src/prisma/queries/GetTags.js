import { gql } from 'apollo-boost';

export const TAG_VIEW_ALL = gql`
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

export const TAG_GET_ALL = gql`
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

export const TAG_GET_SINGLE = gql`
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