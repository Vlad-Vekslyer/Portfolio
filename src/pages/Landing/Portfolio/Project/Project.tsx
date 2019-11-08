import React from "react"
import {Container, ToolsContainer, Tool} from "./StyledProject"
import Image from "./Image/Image"
import {Description} from "../../../../data"

interface ToolsProps {
  tools: string[]
}

function Tools(props: ToolsProps){
  let tools = props.tools.map((tool, index) => <Tool key={index}>{tool}</Tool>)
  return(
    <ToolsContainer>
      {tools}
    </ToolsContainer>
  )
}

interface ProjectProps {
  isMobile?: boolean,
  desc: Description
}

function Project(props: ProjectProps){
  return(
    <Container>
      <Image isMobile={props.isMobile} desc={props.desc}/>
      <Tools tools={props.desc.tools}/>
    </Container>
  )
}

export default Project
