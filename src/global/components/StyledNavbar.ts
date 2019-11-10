import styled, {keyframes} from "styled-components"
import {Link} from "react-router-dom"

const NavList = styled.ul`
  transition: color 500ms;
  display: flex;
  z-index: 2;
  list-style: none;
  padding: 0;
  font-size: 18px;
  position: fixed;
  right: 4%;
  top: 20px;
  color: ${props => props.theme.color};
`

const NavItem = styled.li`
  margin-right: 15px;
  color: inherit;
  :hover {
    color: ${props => props.theme.hoverColor};
    cursor: pointer;
  }
`

const hoverAnim = keyframes`
  from {
    width: 0;
  } to {
    width: 100%;
  }`

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
  ${NavItem}:hover &{
    display: block;
    animation: ${hoverAnim} 300ms linear forwards;
  }`

export {NavList, NavItem, Underline, StyledLink, Anchor}
