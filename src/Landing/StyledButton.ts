import styled, {keyframes} from "styled-components"

const WhiteStripeAnim = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`

const StyledButton = styled.svg`
  position: absolute;
  bottom: 20px;

  :hover {
    cursor: pointer;
  }
`

const WhiteStripe = styled.rect`
  stroke-dasharray: 469.1;
  stroke-dashoffset: 469.1;
  ${StyledButton}:hover & {
    animation: ${WhiteStripeAnim} 500ms linear forwards;
  }
`

export {WhiteStripe, StyledButton}
