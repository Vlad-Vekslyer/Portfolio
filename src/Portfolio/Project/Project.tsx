import React from "react"
import {Container, ToolsContainer, Tool} from "./StyledProject"
import Image from "./Image/Image"
import {Description} from "../../data"

interface ToolsProps {
  tools: string[]
}

function Tools(props: ToolsProps){
  let tools = props.tools.map(tool => <Tool>{tool}</Tool>)
  return(
    <ToolsContainer>
      {tools}
    </ToolsContainer>
  )
}

interface ProjectProps {
  image: any,
  isMobile?: boolean,
  tools: string[],
  desc: Description
}

function Project(props: ProjectProps){
  return(
    <Container>
      <Image image={props.image} isMobile={props.isMobile} desc={props.desc}/>
      <Tools tools={props.tools}/>
    </Container>
  )
}

export default Project
