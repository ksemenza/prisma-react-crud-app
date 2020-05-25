import React from 'react';
import { projectSearchReducer, projectSearchState } from '../reducers';

export const ProjectSearchStateContext = React.createContext();
export const ProjectSearchDispatchContext = React.createContext();

export const ProjectSearchProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(projectSearchReducer, projectSearchState);

  return (
    <ProjectSearchStateContext.Provider value={state}>
      <ProjectSearchDispatchContext.Provider value={dispatch}>
        {children}
      </ProjectSearchDispatchContext.Provider>
    </ProjectSearchStateContext.Provider>
  );
};