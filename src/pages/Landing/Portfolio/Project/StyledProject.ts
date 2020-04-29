import styled from "styled-components"

const Container = styled.div`
  display: grid;
  grid-template-rows: 3fr 1fr;
`

const ToolsContainer = styled('div')<{parentClicked?: boolean}>`
  display: flex;
  height: 85px;
  flex-wrap: wrap;
  transition: bottom 500ms;
  background-color: rgba(11, 30, 8, 0.05);
  position: relative;
  bottom: 100px;
  z-index: -1;
  ${Container}:hover &{
    bottom: 0;
    z-index: 0;
  }
`

const Tool = styled.span`
  display: flex;
  box-sizing: border-box;
  padding: 5px;
  margin-right: 2px;
  margin-top: 2px;
  height: 36px;
  font-size: 16px;
  font-weight: 500;
  border: 2px solid #4F6D7A;
  color: #4F6D7A;
  align-items: center;
  text-align: center;
`

export {Container, ToolsContainer, Tool}
