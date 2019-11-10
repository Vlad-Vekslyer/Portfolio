import React, {useRef, useState, useEffect} from "react"
import Slider from  "react-slick";
import {Description} from "../../../data"
import {ToolsContainer, SlidesContainer, Slide, Container, StyledAnchor} from "./StyledDashboard"
import {WhiteStripe, StyledButton} from "../../../global/styles/StyledButton"

const Anchor = (props: {url: string, body : string}) => {
  return (
    <>
      <StyledAnchor href={props.url}>
        {props.body}
        <StyledButton style={{width: "100%", height: "100%", position:"absolute", top: 0, left: 0}}>
          <WhiteStripe width="100%" height="100%" rx="4" stroke="#FFFFFF" strokeWidth="5" fill="none"/>
        </StyledButton>
      </StyledAnchor>
    </>
  )
}

const Dashboard = (props: {desc: Description, isMobile: boolean}) => {
  // re-render Dashboard on a screen resize to correctly display arrows
  const [,setState] = useState();
  useEffect(() => {
    let timeoutId = - 1;
    window.addEventListener('resize', () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setState({}), 100);
    })
  }, [])
  let slides = props.desc.album.map((image, index) => <Slide isMobile={props.isMobile} key={index} image={image}/>)
  let tools = props.desc.tools.map((tool, index) => (<p key={index}>- {tool}</p>))
  return(
    <Container>
      <div style={{display: "flex", flexDirection: "column"}}>
        {props.desc.demoLink ? <Anchor body="Website" url={props.desc.demoLink}/> : null}
        <Anchor body="Github" url={props.desc.githubLink}/>
      </div>
      <ToolsContainer>
          {tools}
      </ToolsContainer>
      <SlidesContainer>
        <Slider arrows={window.innerWidth > 768 ? false : true} autoplay={true} autoplaySpeed={5000} slidesToShow={1} speed={500} dots={true}>
          {slides}
        </Slider>
      </SlidesContainer>
    </Container>
  )
}

export default Dashboard
