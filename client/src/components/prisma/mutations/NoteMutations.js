import { gql } from "apollo-boost";

//CREATE NOTE
export default CREATE_NEW_NOTE = gql`
  mutation createNote($note: NoteCreateInput!) {
    createNote(data: $note) {
      id
      topic
      content
      project {
        id
        name
      }
    }
  }
`;


//UPDATE NOTE
export default UPDATE_NOTE = gql`
  mutation updateThisNote(
    $note: NoteWhereUniqueInput!
    $data: NoteUpdateInput!
  ) {
    updateNote(where: $note, data: $data) {
      id
      topic
      project {
        id
        name
      }
    }
  }
`;

//DELETE NOTE
export const DELETE_NOTE = gql`
  mutation deleteThisTag($note: NoteWhereUniqueInput!) {
    deleteNote(where: $note) {
      id
      topic
    }
  }
`;