import React from "react"
import {Container, Header, Projects} from "./StyledPortfolio"
import Project from "./Project/Project"
import {Description} from "./Project/Image/Image"
import * as Charity from "../assets/Charity.png"
import * as Crows from "../assets/Crows.png"
import * as Doggy from "../assets/Doggy.png"

const CharityDesc : Description = {
  name: "The Crows",
  body: `The Crows blends in narrative-driven text games
with card games to deliver a game that provides you with
a unique story-telling experience each time you play.
With an intuitive design, you can quickly start playing
it! Simply read the current story and play a card to
respond to the circumstances presented to you.`,
  demoLink: "https://the-crows.herokuapp.com/",
  githubLink: "https://github.com/Vlad-Vekslyer/The-Crows"
}

const CrowsDesc: Description = {
  name: "BC Charity Portal",
  body: `BC Charity Portal aims to streamline any research that
potential donors want to do before donating to an NPO.
This is done by gathering all NPOs operating in BC unto a
single, easily-accessible platform where donors can
communicate with each other and the NPOs have control
over the content they present.`,
  demoLink: "https://bc-charity-portal.herokuapp.com",
  githubLink: "https://github.com/Vlad-Vekslyer/BC-Charity-Portal"
}

const DoggyDesc: Description = {
  name: "Go Doggy",
  body: `The app that won the VanHacks 2019 hackathon!
Go Doggy aims to make it easier for people to volunteer
to take sheltered dogs on walks as well as act as a platform
to showcase the dogs that need to be adopted.`,
  githubLink: "https://github.com/Vlad-Vekslyer/VanHack-2019"
}

function Portfolio(){
  return(
    <Container>
      <Header>Web Developer Portfolio</Header>
      <Projects>
        <Project desc={CharityDesc} tools={["HTML5", "CSS3", "TypeScript", "React", "Node.js", "Express.js", "MySQL"]} image={Crows}/>
        <Project desc={CrowsDesc} tools={["HTML5", "CSS3", "JavaScript", "jQuery", "Node.js", "Express.js", "MongoDB"]} image={Charity}/>
        <Project desc={DoggyDesc} tools={["React Native","JavaScript", "Node.js", "Express.js", "MongoDB"]} isMobile={true} image={Doggy}/>
      </Projects>
    </Container>
  )
}

export default Portfolio
