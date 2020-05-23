import { gql} from 'apollo-boost'


//CREATE PROJECT
export default CREATE_NEW_PROJECT = gql`
mutation createProject(
    $project: ProjectCreateInput!
  ) {
    createProject(
      data:$project
    ) {
      id
      name
      notes {
          id
          name
      }
      tags {
          tag {
              id
              name
          }
      }
    }
  }`;

//UPDATE PROJECT
export default UPDATE_PROJECT = gql`
mutation updateThisProject(
    $project: ProjectWhereUniqueInput!
    $data: ProjectUpdateInput!
      ) {
    updateProject(
      where:$project,
      data:$data
    ) {
      id
      name
      tags {
          tag {
              name
              id
          }
      }
    }
  }`;

//DELETE PROJECT
export const DELETE_PROJECT = gql`
mutation deleteThisProject(
    $project: ProjectWhereUniqueInput!) {
    deleteProject(
        where: $project
        ) {
    name
 }
}`;