import React from 'react';
import Welcome from "./Landing/Landing"
import ProjectProfile from "./ProjectProfile/ProjectProfile"
import Portfolio from "./Portfolio/Portfolio"
import {Route} from "react-router-dom"

const Landing = () => {
  return (
    <div>
      <Welcome />
      <Portfolio />
    </div>
  )
}

const App: React.FC = () => {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route path="/projects/:name" component={ProjectProfile}/>
    </div>
  );
}

export default App;
