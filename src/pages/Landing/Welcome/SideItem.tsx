import React, {useRef} from "react"
import styled from "styled-components"

const Container = styled.div`
  position: relatize;
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
`

const MessageContainer = styled(Container)`
  transition: transform 200ms linear;
  border-bottom: 2px solid #4f6d7a;
  border-top: 2px solid #4f6d7a;
  width: initial;
  transform: translateX(-245px);
`

const Message = styled.p`
  color: white;
  margin: 0 10px;
  font-size: 1.3em;
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
`

function SideItem(props: {image:any, link?: string, message?: string}){
  const messageContainer: React.MutableRefObject<null | HTMLDivElement> = useRef(null);
  const revealMessage = () => {
    if(messageContainer.current){
      switch(messageContainer.current.style.transform){
        case "translateX(-245px)" : messageContainer.current.style.transform = "translateX(0px)"; break;
        case "translateX(0px)": messageContainer.current.style.transform = "translateX(-245px)"; break;
        default : messageContainer.current.style.transform = "translateX(0px)"; break;
      }
    }
  }
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
