import React from "react"
import {Container, DescriptionContainer, Body, Title, Link, Links} from "./StyledImage"

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
      <Links>
        {props.desc.demoLink ? <Link href={props.desc.demoLink}>Visit Site</Link>: null}
        <Link href={props.desc.githubLink}>Github</Link>
      </Links>
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
