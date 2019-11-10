import styled from "styled-components"
import breakpoints from "../../../global/styles/breakpoins"

const Container = styled.div`
  background: linear-gradient(180deg, #C0D6DF 0%, #EAEAEA 100%);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Header = styled.header`
  display: flex;
  position: relative;
  width: 708px;
  height: 250px;
  font-size: 1.8em;
  color: #4f6d7a;
  margin: 0 auto;
  text-align: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: ${breakpoints.medium}) {
    font-size: 1.5em;
  }
  @media (max-width: ${breakpoints.small}) {
    font-size: 1.3em;
    height: 170px;
  }
  @media (max-width: ${breakpoints.extraSmall}) {
    font-size: 1em;
    height: 145px;
  }

  @media (max-width: ${breakpoints.miniscule}) {
    font-size: 0.8em;
    height: 120px;
  }
`


export {Container, Header}
