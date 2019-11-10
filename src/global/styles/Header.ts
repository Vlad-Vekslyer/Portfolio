import styled from "styled-components"
import breakpoints from "../styles/breakpoins"

const Header = styled.h1`
  padding: 10px 0;
  margin-bottom: 20px;
  background: #4f6d7a
  text-align: center;
  font-size: 48px;
  color: #C0D6DF;
  @media (max-width: ${breakpoints.large}){
    font-size: 32.4px;
  }
  @media (max-width: ${breakpoints.medium}){
    font-size: 26.4px;
  }
`

export default Header
