import styled, {keyframes} from "styled-components"

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
