import React from "react"
import {useParams} from "react-router-dom"
import data, {Description} from "../data"
import {Container, StyledProjectProfile, Header} from "./StyledProjectProfile"
import Dashboard from "./Dashboard/Dashboard"

function getData(name: string | undefined) : Description | undefined{
  if(name && data.hasOwnProperty(name)) { return data[name] }
  else { return undefined }
}

const ProjectProfile = () => {
  let {name} = useParams();
  let projectData = getData(name);
  return(
    <StyledProjectProfile>
        {projectData ? (
          <>
            <Header>{projectData.name}</Header>
            <Container>
              <p style={{marginBottom: "20px"}}>{projectData.body}</p>
              <Dashboard desc={projectData}/>
            </Container>
          </>
        ) : (
          <h1>Error: Project Not Found</h1>
        )}
    </StyledProjectProfile>
  )
}

export default ProjectProfile;
