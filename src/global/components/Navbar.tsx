import React from "react"
import styled, {keyframes} from "styled-components"
import {Link} from "react-router-dom"

const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  font-size: 20px;
  position: fixed;
  right: 4%;
  top: 20px;
  color: #8c8c8c;
`

const NavItem = styled.li`
  margin-right: 15px;
  color: inherit;
  :hover {
    color: grey;
    cursor: pointer;
  }
`

const hoverAnim = keyframes`
  from {
    width: 0;
  } to {
    width: 100%;
  }`

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

const Navbar = () => {
  return (
    <NavList>
      <NavItem>
        <StyledLink to="/">Portfolio</StyledLink>
        <Underline/>
      </NavItem>
      <NavItem>
        Resume
        <Underline/>
      </NavItem>
    </NavList>
  )
}

export default Navbar
