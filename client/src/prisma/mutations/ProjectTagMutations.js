import { gql} from 'apollo-boost'

//CREATE PROJECT TAG
export default CREATE_PROJECT_TAG = gql`
mutation createProjectTag(
    $projectTag: ProjectTagCreateInput!
  ) {
    createProjectTag(
      data:$projectTag
    ) {
      project {
          id
          name
      }
      tag {
          id
          name
      }
      
    }
  }`;

//UPDATE PROJECT TAG
export default UPDATE_PROJECT_TAG = gql`
mutation updateThisProjectTagElement(
    $projectTagElement: ProjectTagElementWhereUniqueInput!
    $data: ProjectTagElementUpdateInput!
      ) {
    updateProjectTagElement(
      where:$projectTagElement,
      data:$data
    ) {
      id
      project {
          id
          name
      }
      tag {
          id
          name
      }
    }
  }`;


//DELETE PROJECT TAG
export const DELETE_PROJECT_TAG = gql`
mutation deleteThisProjectTag(
    $projectTag: ProjectTagWhereUniqueInput!) {
    deleteProjectTag(where: $projectTag) {
    project {
        id
        name
    }
    tag {
        id
        name
    }
 }
}`;