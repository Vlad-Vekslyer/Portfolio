import React from "react"
import {Container, Header, Projects} from "./StyledPortfolio"
import Project from "./Project/Project"
import data from "../data"

function Portfolio(){
  return(
    <Container>
      <Header>Web Developer Portfolio</Header>
      <Projects>
        <Project desc={data.Crows}/>
        <Project desc={data.Charity}/>
        <Project desc={data.Doggy} isMobile={true}/>
      </Projects>
    </Container>
  )
}

export default Portfolio
