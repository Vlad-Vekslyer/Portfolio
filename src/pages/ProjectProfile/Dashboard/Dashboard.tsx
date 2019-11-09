import React, {useRef, useState, useEffect} from "react"
import Slider from  "react-slick";
import {Description} from "../../../data"
import {ToolsContainer, SlidesContainer, Slide, Container, StyledAnchor} from "./StyledDashboard"
import {WhiteStripe, StyledButton} from "../../../global/styles/StyledButton"

/* the logic running in this component is nessecary to make sure
the strokeDasharray/offset of WhiteStripe is correct on a resize
please read all the comments below and refactor with care*/
const Anchor = (props: {url: string, body : string}) => {
  let rect: React.MutableRefObject<SVGRectElement | undefined> = useRef();
  // setState will be used to force the component to re-render
  const [, setState] = useState();
  // we want to re-render the component each time the window is resized since the button width changes
  useEffect(() => {
    let timeoutId = -1;
    window.addEventListener('resize',() => {
      // only re-render after 250ms have passed since the last resizing event
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setState({}), 250);
    })
  }, []);
  useEffect(() => {
    if(rect.current) {
      // for WhiteStripe's animation to work, we need to re-compute its strokeDasharray/offset on each render
      let length = (rect.current.width.animVal.value + rect.current.height.animVal.value) * 2;
      rect.current.style.strokeDasharray = length.toString();
      rect.current.style.strokeDashoffset = length.toString();
    }
  });
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
