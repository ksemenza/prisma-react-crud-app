import React from "react";
import { useLocation, Route, Switch, NavLink } from "react-router-dom";
import "./App.css";
import ProjectContainer from "./components/projects/ProjectContainer";
import TagContainer from "./components/tags/TagContainer";
import NoteContainer from "./components/notes/NoteContainer";

import {ProjectProvider} from './context/ProjectContext'
import {NoteProvider} from './context/NoteContext'
import {TagProvider} from './context/TagContext'
import {ProjectSearchProvider} from './context/ProjectSearchContext'

function App() {
  const location = useLocation();

  return (

    <div className="app-container cover">
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/tags">Tags</NavLink>
      <NavLink to="/notes">Notes</NavLink>
    
    <switch>
        <Route path="/projects" component={ProjectContainer} />
        <Route path="/tags" component={TagContainer} />
        <Route path="/notes" component={NoteContainer} />
        </switch>
    </div>
  );
}

export default App;
