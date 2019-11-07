import styled from "styled-components"

const StyledProjectProfile = styled.div`
  background: linear-gradient(180deg, #C0D6DF 0%, #EAEAEA 100%);
  color: #4f6d7a;
  font-size: 20px;
`

const Container = styled.div`
  width: 65%;
  line-height: 21px;
  word-spacing: -2px;
  margin: 0 auto;
`

const Header = styled.h1`
  padding: 10px 0;
  margin-bottom: 20px;
  background: #4f6d7a;
  text-align: center;
  color: #C0D6DF
`

const FeatureList = styled.ul`
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  width: 50%;
  display: inline-block;
`

export {StyledProjectProfile, Container, Header, FeatureList}
