import React from 'react';
import Landing from "./Landing/Landing"
import Portfolio from "./Portfolio/Portfolio"
import styled from "styled-components"
import IstokWeb from "./assets/IstokWeb.ttf"

const StyledApp = styled.div`
  
`

const App: React.FC = () => {
  return (
    <StyledApp className="App">
      <Landing />
      <Portfolio />
    </StyledApp>
  );
}

export default App;
