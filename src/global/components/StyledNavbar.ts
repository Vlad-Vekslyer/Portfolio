import styled, {keyframes} from "styled-components"
import {Link} from "react-router-dom"
import breakpoints from "../styles/breakpoins"

const hoverAnim = keyframes`
  from {
    width: 0;
  } to {
    width: 100%;
  }
`

const NavList = styled('ul')<{dropMenu: boolean}>`
  transition: color 500ms;
  display: flex;
  z-index: 2;
  list-style: none;
  padding: 0;
  font-size: 18px;
  position: fixed;
  right: 4%;
  top: 15px;
  color: ${props => props.theme.color};
  @media (max-width: ${breakpoints.medium}) {
    right: 0;
  }
  @media (max-width: ${breakpoints.small}) {
    background-color: ${props => props.dropMenu ? props.theme.color : "none"};
    color: ${props => props.dropMenu ? props.theme.dropColor : props.theme.color};
    flex-direction: ${props => props.dropMenu ? "row-reverse" : "row"};
    animation: ${props => props.dropMenu ? hoverAnim : "none"};
    animation-duration: 500ms;
    animation-fill-mode: forwards;
    padding: 8px;
    top: 0;
    align-items: center;
    border-radius: 4px 0 0 4px;
  }
`

const NavItem = styled('li')<{dropMenu: boolean}>`
  margin-right: 15px;
  color: inherit;
  :hover {
    color: ${props => props.theme.hoverColor};
    cursor: pointer;
  }
  @media (max-width: ${breakpoints.small}) {
    display: ${props => props.dropMenu ? "inline-block" : "none"};
    margin-right: 35px;
  }
`

const Hamburger = styled(NavItem)`
  display: none;

  @media (max-width: ${breakpoints.small}){
    display: inline-block;
    margin-right: 10px;
  }
`

const HamLine = styled.hr`
  display: block;
  width: 20px;
  margin-bottom: 4px;
  border: 2px solid;
  color: inherit;
`

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const Underline = styled.hr`
  display: none;
  color: inherit;
  @media (min-width: ${breakpoints.small}){
    ${NavItem}:hover &{
      display: block;
      animation: ${hoverAnim} 300ms linear forwards;
    }
  }
`

export {NavList, NavItem, Underline, StyledLink, Anchor, Hamburger, HamLine}
