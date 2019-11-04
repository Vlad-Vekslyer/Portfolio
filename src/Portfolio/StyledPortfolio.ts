import styled from "styled-components"

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
`

const Header = styled.h1`
  padding: 20px 0;
  text-align: center;
  color: #4f6d7a`


export {Container, Header, Projects};
