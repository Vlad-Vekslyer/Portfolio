import React, {useEffect, useState} from "react"
import {ThemeProvider} from "styled-components"
import {NavList, NavItem, Underline, StyledLink, Anchor} from "./StyledNavbar"
import Resume from "../../assets/Resume.pdf"

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

interface darkZones { [index: number]: number[] }

const darkZones: { [index: string]: darkZones } = {
  "/": {
    500: [718, 800]
  },
  "/projects/project-name": {
    500: [0, 47],
    100: [0, 20]
  }
}

function getPath(cb: (path: darkZones) => number[]): number[]{
  let path = window.location.pathname;
  if(path === "/") { return cb(darkZones["/"]) }
  let pathRegex = /\/projects\/a*/;
  if (pathRegex.test(path)) { return cb(darkZones["/projects/project-name"]) }
  else {
    throw "Invalid Path"
  }
}

function getDarkZone(path: darkZones): number[]{
  let sizes = Object.getOwnPropertyNames(path)
  for(let i = sizes.length - 1; i > -1; i --){
    let size = parseInt(sizes[i])
    if(window.innerWidth >= size) { return path[size] }
  }
  throw "Invalid Path"
}

const Navbar = () => {
  const [theme, setTheme] = useState(darkTheme);
  useEffect(() => {
    let darkZone = getPath(getDarkZone);
    window.addEventListener('scroll', () => {
      let position = window.scrollY;
      if(position >= darkZone[0] && position <= darkZone[1]) setTheme(lightTheme);
      else setTheme(darkTheme);
    })
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <NavList>
        <NavItem>
          <StyledLink to="/">Portfolio</StyledLink>
          <Underline/>
        </NavItem>
        <NavItem>
          <Anchor href={Resume} target="_blank">Resume</Anchor>
          <Underline/>
        </NavItem>
      </NavList>
    </ThemeProvider>
  )
}

export default Navbar
