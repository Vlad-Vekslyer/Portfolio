import React, {useRef, useEffect} from "react"
import styled from "styled-components"
import breakpoints from "../../../global/styles/breakpoins"
import getScreenSpecs from "../../../global/getScreenSpecs"

const Container = styled.div`
  z-index: 1;
  width: 70px;
  height: 70px;
  background-color: #61C19E;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-right: 3px solid #4f6d7a;
  :first-child {
    border-top: 3px solid #4f6d7a;
    border-bottom: 2px solid #4f6d7a;
    border-radius: 0 15px 0 0;
  }
  :last-child {
    border-top: 3px solid #4f6d7a;
    border-bottom: 3px solid #4f6d7a;
    border-radius: 0 0 15px 0;
  }
  @media (max-width:${breakpoints.small}){
    width: 60px;
    height: 60px;
  }
`

const MessageContainer = styled(Container)`
  transition: transform 200ms linear;
  border-bottom: 2px solid #4f6d7a;
  border-top: 2px solid #4f6d7a;
  width: initial;
  transform: translateX(-245px);
  @media (max-width: ${breakpoints.small}){
    transform: translateX(-236px);
    width: initial;
  }
`

const Message = styled.p`
  color: white;
  margin: 0 10px;
  font-size: 1.3em;
  @media (max-width: ${breakpoints.small}){
    font-size: 1.25em;
  }
`

const Icon = styled.img`
  width: inherit;
  height: inherit;
  :hover {
    cursor: pointer;
  }
`

const Link = styled.a`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  @media (max-width: ${breakpoints.small}){
    width: 40px;
    height: 40px;
  }
`

const translations = {
  768: [-245],
  100: [-236]
}

function SideItem(props: {image:any, link?: string, message?: string}){
  const messageContainer: React.MutableRefObject<null | HTMLDivElement> = useRef(null);
  const revealMessage = () => {
    if(messageContainer.current){
      switch(messageContainer.current.style.transform){
        case `translateX(${getScreenSpecs(translations)[0]}px)` : messageContainer.current.style.transform = "translateX(0px)"; break;
        case "translateX(0px)": messageContainer.current.style.transform = `translateX(${getScreenSpecs(translations)[0]}px)`; break;
        default : messageContainer.current.style.transform = "translateX(0px)"; break;
      }
    }
  }
  useEffect(() => {
    let timeoutId = -1;
    window.addEventListener('resize', () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if(messageContainer.current){
          messageContainer.current.style.transform = `translateX(${getScreenSpecs(translations)[0]}px)`;
        }
      }, 150);
    });
  }, [])
  return(
    <>
      {!props.message ? (
        <Container>
          <Link target="__blank" href={props.link}>
            <Icon src={props.image}/>
          </Link>
        </Container>
      ) : (
        <MessageContainer ref={messageContainer}>
          <Message>{props.message}</Message>
          <Link onClick={revealMessage} href={props.link}>
            <Icon src={props.image}/>
          </Link>
        </MessageContainer>
      )}
    </>
  )
}

export default SideItem
