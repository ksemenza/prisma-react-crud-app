import React from "react";
import { useLocation, Route, Switch, NavLink } from "react-router-dom";
import "./App.css";
import ProjectContainer from "./components/projects/ProjectContainer";
import TagContainer from "./components/tags/TagContainer";
import NoteContainer from "./components/notes/NoteContainer";
//USED IN ORIGINAL MISSION CONTROL FOR SIGN IN AUTH
// import {SecureRoute, ImplicitCallback } from '@okta/okta-react'
// import initializedAnalytics from '../utils/initializeAnalytics'
// import Authorization from './Authorization';

function App() {
  const location = useLocation();

  return (
    <div className="app-container cover">
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/tags">Tags</NavLink>
      <NavLink to="/notes">Notes</NavLink>
      
      <Switch>
        <Route path="/projects" component={ProjectContainer} />
        <Route path="/tags" component={TagContainer} />
        <Route path="/notes" component={NoteContainer} />
      </Switch>
    </div>
  );
}

export default App;
