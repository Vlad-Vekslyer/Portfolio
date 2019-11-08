import React from "react"
import {Container, DescriptionContainer, Body, Title, AnchorSpan, Anchors, Anchor, StyledLink} from "./StyledImage"
import {Description as DescInterface} from "../../../../../data";

function Description(props: {desc: DescInterface}){
  console.log(props.desc)
  return(
    <DescriptionContainer>
      <Title>{props.desc.name}</Title>
      <Body>{props.desc.body}</Body>
      <Anchors>
        {props.desc.demoLink ?
          <AnchorSpan>
            <Anchor href={props.desc.demoLink}>Visit Site</Anchor>
          </AnchorSpan>: null}
        <AnchorSpan>
          <Anchor href={props.desc.githubLink}>Github</Anchor>
        </AnchorSpan>
        <AnchorSpan>
          <StyledLink to={`/projects/${props.desc.name.toLowerCase().replace(/ /g, '-')}`}>Learn More</StyledLink>
        </AnchorSpan>
      </Anchors>
    </DescriptionContainer>
  )
}

function Image(props: {isMobile?: boolean, desc: DescInterface}){
  return(
    <Container isMobile={props.isMobile} image={props.desc.album[0]}>
        <Description desc={props.desc}/>
    </Container>
  )
}

export default Image
