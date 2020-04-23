import React from "react"
import {Container, Projects} from "./StyledPortfolio"
import Project from "./Project/Project"
import data from "../../../data"
import Header from "../../../global/styles/Header"

function Portfolio(){
  return(
    <Container>
      <Header>Portfolio</Header>
      <Projects>
        <Project desc={data["blog-pub"]}/>
        <Project desc={data["the-crows"]}/>
        <Project desc={data["go-doggy"]} isMobile={true}/>
        <Project desc={data["tri-tech"]}/>
      </Projects>
    </Container>
  )
}

export default Portfolio
