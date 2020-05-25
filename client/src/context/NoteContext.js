import React, { useState, createContext } from 'react';
import { noteReducer, noteState } from '../reducers';

export const NoteContext = createContext();
export const NoteDispatchContext = React.createContext();


export const NoteProvider = props => {

const [state, dispatch] = React.useReducer(noteReducer, noteState);
  const [note, setNote] = useState({ noteId: '', topic: '', content:'', project:[] });
  const [noteArray, setNoteArray] = useState([]);
  return (
    <NoteContext.Provider value={state}>
    <NoteDispatchContext.Provider value={dispatch}>
      {props.children}
      </NoteDispatchContext.Provider>
    </NoteContext.Provider>
  );
};