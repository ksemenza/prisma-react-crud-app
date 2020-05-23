import { gql } from 'apollo-boost';

export default NOTE_VIEW_ALL = gql`
query notes {
      id
      topic 
      content
      project {
          id
          name
      }
      createdAt
      updatedAt
    }`;

export default NOTE_GET_ALL = gql`
query GetAllNotes($id: ID!) {
    notes(where:{id:$id}) {
        id
        topic
        content
        project {
                  id 
                  name
                }
        createdAt
        updatedAt
    }
  }`;

export default NOTE_GET_SINGLE = gql`
query GetSingleNote($noteId: ID!) {
    note(where:{id:$noteId}) {
        id
        topic
        content
        project {
                  id 
                  name
                }
        createdAt
        updatedAt
    }
  }`;


