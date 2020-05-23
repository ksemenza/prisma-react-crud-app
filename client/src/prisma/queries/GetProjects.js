import { gql } from 'apollo-boost';

export default PROJECT_VIEW_ALL = gql`
query projects($id: ID!){
      id
      name
      tags {
        tag {
          id
          name
        }
      }
      notes{
        id
        name
      }
      createdAt
      updatedAt
    }`;


export default PROJECT_GET_ALL = gql`
query GetAllProjects($id: ID!){
    projects(where:{id: $id}) {
      id
      name
      tags {
        tag {
          id 
          name
        }
      }
      notes {
        id
        name
      }
      createdAt
      updatedAt
    }
  }`;
export default PROJECT_GET_SINGLE = gql`
query GetSingleProject($projectId: ID!){
    project(where:{id: $projectId}) {
      id
      name
      tags {
        tag {
          id 
          name
        }
      }
      notes {
        id
        name
      }
      createdAt
      updatedAt
    }
  }`;