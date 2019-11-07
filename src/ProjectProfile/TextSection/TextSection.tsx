import React from "react"

function TextSection(props: {title: string, children : any}){
  return(
    <div style={{marginBottom: "50px"}}>
      <h2 style={{marginBottom: "5px", marginTop: "15px"}}>{props.title}</h2>
      <hr style={{marginBottom: "10px"}}/>
      <div>{props.children}</div>
    </div>
  )
}
export default TextSection
