import React from "react"
import {Container, Header, Projects} from "./StyledPortfolio"
import Project from "./Project/Project"
import * as Charity from "../assets/Charity.png"
import * as Crows from "../assets/Crows.png"
import * as Doggy from "../assets/Doggy.png"
import data from "../data"

function Portfolio(){
  return(
    <Container>
      <Header>Web Developer Portfolio</Header>
      <Projects>
        <Project desc={data.Crows} tools={["HTML5", "CSS3", "TypeScript", "React", "Node.js", "Express.js", "MySQL"]} image={Crows}/>
        <Project desc={data.Charity} tools={["HTML5", "CSS3", "JavaScript", "jQuery", "Node.js", "Express.js", "MongoDB"]} image={Charity}/>
        <Project desc={data.DoggyDesc} tools={["React Native","JavaScript", "Node.js", "Express.js", "MongoDB"]} isMobile={true} image={Doggy}/>
      </Projects>
    </Container>
  )
}

export default Portfolio
