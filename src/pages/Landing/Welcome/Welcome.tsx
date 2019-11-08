import React from "react"
import Typing from "react-typing-animation"
import {Container, Header} from "./StyledLanding"
import Button from "./Button"

function Welcome(){
  return(
    <Container>
      <Header>
        <Typing speed={10}>
          <h1 style={{lineHeight: "1em"}}>VLADYSLAV VEKSLYER</h1>
          <h2 style={{lineHeight: "1em"}}>Highly motivated • Team-oriented</h2>
          <h2 style={{lineHeight: "1em"}}>Full-stack developer</h2>
        </Typing>
        <Button />
      </Header>
    </Container>
  )
}

export default Welcome;
