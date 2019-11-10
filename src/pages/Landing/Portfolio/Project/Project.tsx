import React, {useState} from "react"
import {Container, ToolsContainer, Tool} from "./StyledProject"
import Image from "./Image/Image"
import {Description} from "../../../../data"

interface ToolsProps {
  tools: string[],
  parentClicked: boolean
}

function Tools(props: ToolsProps){
  let tools = props.tools.map((tool, index) => <Tool key={index}>{tool}</Tool>)
  return(
    <ToolsContainer parentClicked={props.parentClicked}>
      {tools}
    </ToolsContainer>
  )
}

interface ProjectProps {
  isMobile?: boolean,
  desc: Description
}

function Project(props: ProjectProps){
  const [isClicked, setClicked] = useState(false);
  return(
    <Container onTouchEnd = {() => setClicked(!isClicked)}>
      <Image parentClicked={isClicked} isMobile={props.isMobile} desc={props.desc}/>
      <Tools parentClicked={isClicked} tools={props.desc.tools}/>
    </Container>
  )
}

export default Project
