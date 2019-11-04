import styled from "styled-components"
import Background from "../../../assets/Background.jpg"
import {Container as ProjectContainer} from "../StyledProject"

const Container = styled('div')<{image: any, isMobile?: boolean}>`
  background: url(${props => props.image}) ,url(${props => props.isMobile ? Background : "none"});
  background-size: ${props => props.isMobile ? "contain, cover" : "cover"};
  background-repeat: no-repeat;
  background-position: ${props => props.isMobile ? "center" : "initial"};
  height: 100%;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 1;
`

const DescriptionContainer = styled.div`
  transition: opacity 500ms;
  font-size: 14px;
  position: absolute;
  text-align: center;
  color: #C0D6DF;
  height: 100%;
  width: 100%;
  display: inline-block;
  opacity: 0;
  background: rgb(51, 66, 79);
  ${ProjectContainer}: hover & {
    opacity: 0.92;
  }
`

const Body = styled.p`
  margin: 0 auto;
  width: 70%;
  line-height: 14px;`

const Title = styled.h2`
  padding: 5px;
  margin: 0;`

const Link = styled.a`
  tranisiton: color 500ms background 500ms;
  text-decoration: none;
  margin: 0 5px;
  font-weight: 600;
  text-align: center;
  color: #C0D6DF;
  box-sizing: border-box;
  padding: 5px;
  border: 2px solid #C0D6DF;
  border-radius: 3px;
  :hover {
    background: #C0D6DF;
    color: rgb(11, 30, 8);
  }
  `

const Links = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: absolute;
  bottom: 10px;
`

export {Container, DescriptionContainer, Body, Title, Link, Links}
