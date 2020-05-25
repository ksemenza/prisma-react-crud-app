import React, { useState, createContext } from 'react';
import { tagReducer, tagState } from '../reducers';

export const TagContext = createContext();
export const TagDispatchContext = React.createContext();


export const TagProvider = props => {

const [state, dispatch] = React.useReducer(tagReducer, tagState);
  const [tag, setTag] = useState({ tagId: '', name: '', isUsed:false });
  const [tagArray, setTagArray] = useState([]);
  return (
    <TagContext.Provider
      value={state}
    >
    <TagDispatchContext.Provider value={dispatch}>
      {props.children}
      </TagDispatchContext.Provider>
    </TagContext.Provider>
  );
};