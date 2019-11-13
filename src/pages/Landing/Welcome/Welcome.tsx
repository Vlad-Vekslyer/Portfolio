import React, {useCallback} from "react"
import Typing from "react-typing-animation"
import {Container, Header, SidePanel} from "./StyledLanding"
import Button from "./Button"
import SideItem from "./SideItem"
import github from "../../../assets/github.png"
import email from "../../../assets/email.png"
import linkedin from "../../../assets/linkedin.png"

function Welcome(){
  const scrollUp = useCallback(element => {
    if(element !== null){
      window.scrollTo(0,0)
    }
  }, [])
  return(
    <>
      <SidePanel>
        <SideItem link="https://github.com/Vlad-Vekslyer" image={github}/>
        <SideItem message="vladatcanada@gmail.com" image={email}/>
        <SideItem link="https://www.linkedin.com/in/vladyslav-vekslyer-880b72190/" image={linkedin}/>
      </SidePanel>
      <Container ref={scrollUp}>
        <Header>
          <Typing speed={25}>
            <h1 style={{lineHeight: "1em"}}>VLADYSLAV VEKSLYER</h1>
            <h2 style={{lineHeight: "1em"}}>Highly motivated • Team-oriented</h2>
            <h2 style={{lineHeight: "1em"}}>Full-stack developer</h2>
          </Typing>
          <Button />
        </Header>
      </Container>
    </>
  )
}

export default Welcome;
