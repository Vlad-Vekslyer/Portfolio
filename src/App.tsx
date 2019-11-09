import React from 'react';
import Welcome from "./pages/Landing/Welcome/Welcome"
import ProjectProfile from "./pages/ProjectProfile/ProjectProfile"
import Portfolio from "./pages/Landing/Portfolio/Portfolio"
import Navbar from "./global/components/Navbar"
import {Route} from "react-router-dom"

const Landing = () => {
  return (
    <>
      <Navbar/>
      <Welcome />
      <Portfolio />
    </>
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
