import styled, {keyframes} from "styled-components"
import breakpoints from "./breakpoins"

const WhiteStripeAnim = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`

const StyledSVGButton = styled.svg`
  position: absolute;
  bottom: 20px;
  :hover {
    cursor: pointer;
  }
  @media (max-width:${breakpoints.medium}){
    width: 160px;
    height: 60px;
    bottom: 55px;
  }
  @media (max-width:${breakpoints.small}){
    width: 140px;
    height: 50px;
    bottom: 5px;
  }
  @media (max-width: ${breakpoints.miniscule}){
    width: 100px;
    height: 40px;
  }
`

const StyledButton = styled.svg`
  `

const WhiteStripe = styled.rect`
  stroke-dasharray: 469.1;
  stroke-dashoffset: 469.1;
  ${StyledSVGButton}:hover & {
    animation: ${WhiteStripeAnim} 500ms linear forwards;
  }
  ${StyledButton}:hover & {
    animation: ${WhiteStripeAnim} 500ms linear forwards;
  }
`

export {WhiteStripe, StyledButton, StyledSVGButton}
