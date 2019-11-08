import React from "react"
import {ThemeProvider} from "styled-components"
import {NavList, NavItem, Underline, StyledLink} from "./StyledNavbar"

interface linkTheme {
  color: string,
  hoverColor: string
}

const darkTheme: linkTheme = {
  color: "#4f6d7a",
  hoverColor: "#2d3b47"
}

const lightTheme: linkTheme = {
  color: "#C0D6DF",
  hoverColor: "#98a8b5"
}

const Navbar = () => {
  return (
    <ThemeProvider theme={darkTheme}>
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
    </ThemeProvider>
  )
}

export default Navbar
