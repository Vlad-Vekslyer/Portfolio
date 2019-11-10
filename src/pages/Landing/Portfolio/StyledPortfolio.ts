import styled from "styled-components"
import breakpoints from "../../../global/styles/breakpoins"

const Container = styled.div`
  width: 100%;
  background: linear-gradient(180deg, #EAEAEA 100%, #C0D6DF 0%);
  font-size: 1.5em;
`

const Projects = styled.section`
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin: 0 auto;
  width: 65%;
  @media (max-width: ${breakpoints.large}){
    width: 80%;
  }
  @media (max-width: ${breakpoints.medium}){
    width: 95%;
  }

  @media (max-width: ${breakpoints.small}){
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    width: 65%;
  }
`

const Header = styled.h1`
  padding: 10px 0;
  margin-bottom: 20px;
  background: #4f6d7a
  text-align: center;
  color: #C0D6DF;
  @media (max-width: ${breakpoints.large}){
    font-size: 1.35em;
  }
  @media (max-width: ${breakpoints.medium}){
    font-size: 1.1em;
  }
`


export {Container, Header, Projects};
