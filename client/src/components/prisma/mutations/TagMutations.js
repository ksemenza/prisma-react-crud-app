import { gql} from 'apollo-boost'


//CREATE TAG
export default CREATE_NEW_TAG gql`
mutation createTag(
    $tag: TagCreateInput!
  ) {
    createTag(
      data:$tag
    ) {
      id
      name
      projects {
          project {
              id
              name
          }
      }
    }
  }`;


//UPDATE TAG
export default UPDATE_TAG = gql`
mutation updateThisTag(
    $tag: TagWhereUniqueInput!
    $data: TagUpdateInput!
      ) {
    updateTag(
      where:$tag,
      data:$data
    ) {
      id
      name
      projects {
          project {
              name
              id
          }
      }
    }
  }`;

//DELETE TAG
export const DELETE_TAG = gql`
mutation deleteThisTag(
    $tag: TagWhereUniqueInput!) {
    deleteTag(
        where: $tag
        ) {
    name
 }
}`;