import React from "react"
import {Container, DescriptionContainer, Body, Title, Anchor, Anchors} from "./StyledImage"
import {Description as DescInterface} from "../../../data";

function Description(props: {desc: DescInterface}){
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

function Image(props: {isMobile?: boolean, image: string, desc: DescInterface}){
  return(
    <Container isMobile={props.isMobile} image={props.image}>
        <Description desc={props.desc}/>
    </Container>
  )
}

export default Image
