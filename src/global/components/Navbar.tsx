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


// returns the areas where the background is dark
function supplyDarkZones(){
  return {
    "/": {
      500: [window.innerHeight - 40, window.innerHeight + 50]
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
    throw "Invalid Path"
  }
}

// get the dark background coordinates depending on the screen size
function getDarkZone(path: darkZones): number[]{
  let sizes = Object.getOwnPropertyNames(path);
  for(let i = sizes.length - 1; i > -1; i --){
    let size = parseInt(sizes[i])
    if(window.innerWidth >= size) { return path[size] }
  }
  throw "Invalid Path"
}

const Navbar = () => {
  const [theme, setTheme] = useState(darkTheme);
  useEffect(() => {
    let timeoutId = -1;
    window.addEventListener('scroll', () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        let darkZone = getPath(getDarkZone);
        let position = window.scrollY;
        if(position >= darkZone[0] && position <= darkZone[1]) setTheme(lightTheme);
        else setTheme(darkTheme);
      }, 20);
    });
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
