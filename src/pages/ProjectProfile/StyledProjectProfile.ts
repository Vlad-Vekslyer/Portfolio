import styled from "styled-components"
import breakpoints from "../../global/styles/breakpoins"

const StyledProjectProfile = styled.div`
  background: linear-gradient(180deg, #C0D6DF 0%, #EAEAEA 100%);
  color: #4f6d7a;
  font-size: 19px;
  @media (max-width: ${breakpoints.medium}){
    font-size: 18px;
  }

  @media (max-width: ${breakpoints.miniscule}){
    font-size: 16px;
  }
`

const Container = styled.div`
  width: 65%;
  line-height: 21px;
  word-spacing: -2px;
  margin: 0 auto;
  @media (max-width: ${breakpoints.large}){
    width: 80%;
  }
  @media (max-width: ${breakpoints.medium}){
    width: 90%;
  }
`

const FeatureList = styled.ul`
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  width: 50%;
  display: inline-block;
  @media (max-width: ${breakpoints.miniscule}){
    width: 100%;
  }
`

const TopDesc = styled.p`
  @media (max-width: ${breakpoints.small}){
    display: none;
  }
`

export {StyledProjectProfile, Container, FeatureList, TopDesc}
