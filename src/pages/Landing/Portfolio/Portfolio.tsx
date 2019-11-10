import React from "react"
import {Container, Projects} from "./StyledPortfolio"
import Project from "./Project/Project"
import data from "../../../data"
import Header from "../../../global/styles/Header"

function Portfolio(){
  return(
    <Container>
      <Header>Web Developer Portfolio</Header>
      <Projects>
        <Project desc={data["the-crows"]}/>
        <Project desc={data["bc-charity-portal"]}/>
        <Project desc={data["go-doggy"]} isMobile={true}/>
      </Projects>
    </Container>
  )
}

export default Portfolio
