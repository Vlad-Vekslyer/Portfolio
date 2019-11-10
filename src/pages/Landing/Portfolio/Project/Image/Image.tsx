import React from "react"
import {Container, DescriptionContainer, Body, Title, AnchorSpan, Anchors, Anchor, StyledLink} from "./StyledImage"
import {Description as DescInterface} from "../../../../../data";

function Description(props: {desc: DescInterface, parentClicked: boolean, isMobile? : boolean}){
  let profileLink = !props.isMobile ?
    `/projects/${props.desc.name.toLowerCase().replace(/ /g, '-')}` :
    `/projects/${props.desc.name.toLowerCase().replace(/ /g, '-')}?mobile=1`;
  return(
    <DescriptionContainer parentClicked={props.parentClicked}>
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
          <StyledLink to={profileLink}>Learn More</StyledLink>
        </AnchorSpan>
      </Anchors>
    </DescriptionContainer>
  )
}

function Image(props: {isMobile?: boolean, desc: DescInterface, parentClicked: boolean}){
  return(
    <Container isMobile={props.isMobile} image={props.desc.album[0]}>
        <Description isMobile={props.isMobile} parentClicked={props.parentClicked} desc={props.desc}/>
    </Container>
  )
}

export default Image
