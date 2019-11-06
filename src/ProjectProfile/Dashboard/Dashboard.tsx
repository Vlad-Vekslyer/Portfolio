import React, {useRef, useState, useEffect} from "react"
import Slider from  "react-slick";
import {Description} from "../../data"
import {ToolsContainer, SlidesContainer, Slide, Container, StyledAnchor} from "./StyledDashboard"
import {WhiteStripe, StyledButton} from "../../GlobalStyles/StyledButton"

const Anchor = (props: {url: string, body : string}) => {
  let rect: React.MutableRefObject<SVGRectElement | undefined> = useRef();
  const [, setState] = useState();
  useEffect(() => window.onresize = () => setState({}), []);
  useEffect(() => {
    if(rect.current) {
      let length = (rect.current.width.baseVal.value + rect.current.height.baseVal.value) * 2;
      rect.current.style.strokeDasharray = length.toString();
      rect.current.style.strokeDashoffset = length.toString();
    }
  })
  return (
    <>
      <StyledAnchor href={props.url}>
        {props.body}
        <StyledButton style={{width: "100%", height: "100%", position:"absolute", top: 0, left: 0}}>
          <WhiteStripe ref={rect as React.MutableRefObject<SVGRectElement>} width="100%" height="100%" rx="4" stroke="#FFFFFF" strokeWidth="5" fill="none"/>
        </StyledButton>
      </StyledAnchor>
    </>
  )
}

const Dashboard = (props: {desc: Description}) => {
  let slides = props.desc.album.map((image, index) => <Slide key={index} image={image}/>)
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
        <Slider arrows={false} autoplay={true} autoplaySpeed={5000} slidesToShow={1} speed={500} dots={true}>
          {slides}
        </Slider>
      </SlidesContainer>
    </Container>
  )
}

export default Dashboard
