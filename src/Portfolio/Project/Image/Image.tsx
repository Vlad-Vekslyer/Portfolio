import React from "react"
import {Container, DescriptionContainer, Body, Title, Anchor, Anchors} from "./StyledImage"

export interface Description {
  name: string,
  body: string,
  demoLink?: string,
  githubLink: string
}

function Description(props: {desc: Description}){
  return(
    <DescriptionContainer>
      <Title>{props.desc.name}</Title>
      <Body>{props.desc.body}</Body>
      <Anchors>
        {props.desc.demoLink ? <Anchor href={props.desc.demoLink}>Visit Site</Anchor>: null}
        <Anchor href={props.desc.githubLink}>Github</Anchor>
      </Anchors>
    </DescriptionContainer>
  )
}

function Image(props: {isMobile?: boolean, image: string, desc: Description}){
  return(
    <Container isMobile={props.isMobile} image={props.image}>
        <Description desc={props.desc}/>
    </Container>
  )
}

export default Image
