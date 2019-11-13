import React, {useEffect, useState} from "react"
import {ThemeProvider} from "styled-components"
import {NavList, NavItem, Underline, StyledLink, Anchor, Hamburger, HamLine} from "./StyledNavbar"
import Resume from "../../assets/Resume.pdf"
import getScreenSpecs from "../getScreenSpecs"

interface linkTheme {
  color: string,
  hoverColor: string,
  dropColor: string
}

const darkTheme: linkTheme = {
  color: "#4f6d7a",
  hoverColor: "#2d3b47",
  dropColor: "#C0D6DF"
}

const lightTheme: linkTheme = {
  color: "#C0D6DF",
  hoverColor: "#98a8b5",
  dropColor: "#4f6d7a"
}

interface darkZones { [index: number]: number[] }

// returns the areas where the background is dark
function supplyDarkZones(){
  return {
    "/": {
      896: [window.innerHeight - 40, window.innerHeight + 50],
      320: [window.innerHeight - 35, window.innerHeight + 30]
    },
    "/projects/project-name": {
      500: [0, 47],
      100: [0, 20]
    }
  }
}

// get the an array of dark background coordinates of the current view
function getPath(cb: (path: darkZones) => number[]): number[]{
  let path = window.location.pathname;
  if(path === "/") { return cb(supplyDarkZones()["/"]) }
  let pathRegex = /\/projects\/a*/;
  if (pathRegex.test(path)) { return cb(supplyDarkZones()["/projects/project-name"]) }
  else {
    throw new Error("Invalid Path");
  }
}

// get the dark background coordinates depending on the screen size
function getDarkZone(path: darkZones): number[]{
  let sizes = Object.getOwnPropertyNames(path);
  for(let i = sizes.length - 1; i > -1; i --){
    let size = parseInt(sizes[i])
    if(window.innerWidth >= size) { return path[size] }
  }
  throw new Error("Invalid Path");
}

const Navbar = () => {
  const [theme, setTheme] = useState(window.location.pathname !== "/" ? lightTheme : darkTheme);
  const [dropMenu, setDropMenu] = useState(false);
  useEffect(() => {
    let timeoutId = -1;
    window.addEventListener('scroll', () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        let darkZone = getPath(getScreenSpecs);
        let position = window.scrollY;
        if(position >= darkZone[0] && position <= darkZone[1]) setTheme(lightTheme);
        else setTheme(darkTheme);
      }, 100);
    });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <NavList dropMenu={dropMenu}>
        <Hamburger dropMenu={dropMenu} onClick={() => setDropMenu(!dropMenu)}>
          <HamLine/>
          <HamLine/>
          <HamLine/>
        </Hamburger>
        <NavItem dropMenu={dropMenu}>
          <StyledLink to="/">Home</StyledLink>
          <Underline/>
        </NavItem>
        <NavItem dropMenu={dropMenu}>
          <Anchor href={Resume} target="_blank">Resume</Anchor>
          <Underline/>
        </NavItem>
      </NavList>
    </ThemeProvider>
  )
}

export default Navbar
