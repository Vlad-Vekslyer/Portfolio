import styled from "styled-components"
import Background from "../../../assets/Background.jpg"
import breakpoints from "../../../global/styles/breakpoins"

const Container = styled.div`
  display: grid;
  grid-template-columns: 15% 85%;
  grid-row-gap: 25px;
  height: 375px;
  @media (max-width: ${breakpoints.small}){
    display: flex;
    flex-direction: column-reverse;
    grid-row-gap: 0;
    height: 100%;
  }
`

const Slide = styled('div')<{image: any, isMobile: boolean}>`
  height: 350px;
  background: url(${props => props.image}) ,url(${props => props.isMobile ? Background : "none"});
  background-size: ${props => props.isMobile ? "contain, cover" : "cover"};
  background-repeat: no-repeat;
  background-position: ${props => props.isMobile ? "center" : "initial"};
`

const SlidesContainer = styled.div`
  height: 100%;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
`

const ToolsContainer = styled.div`
  @media (max-width: ${breakpoints.small}){
    display: none;
  }
`

const StyledAnchor = styled('a')<{isMobile?: boolean}>`
  position: relative;
  padding: 10px 10px;
  box-sizing: border-box;
  text-decoration: none;
  border: 2.5px solid #4F6D7A;
  background: #61C19E;
  border-radius: 4px;
  width: 90%;
  margin-bottom: 10px;
  text-align: center;
  font-weight: bold;
  color: #FFFFFF;
  @media (max-width: ${breakpoints.small}){
    width: ${props => props.isMobile ? "100%" : "45%"};
  }
`

const AnchorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: ${breakpoints.small}) {
    justify-content: space-between;
    flex-direction: row;
    margin-top: 15px;
  }
`

export {Slide, SlidesContainer, ToolsContainer, Container, StyledAnchor, AnchorsContainer}
