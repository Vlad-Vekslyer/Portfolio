import React from "react"
import data, {Description} from "../data"
import {useParams} from "react-router-dom"
import {Container, StyledProjectProfile, Header} from "./StyledProjectProfile"

function getData(name: string | undefined) : Description | undefined{
  if(name && data.hasOwnProperty(name)) { return data[name] }
  else { return undefined }
}

const Dashboard = () => {
  return(
    <div>

    </div>
  )
}

const ProjectProfile = () => {
  let {name} = useParams();
  let projectData = getData(name);
  return(
    <StyledProjectProfile>
        {projectData ? (
          <div>
            <Header>{projectData.name}</Header>
            <Container>
              <p>{projectData.body}</p>
              <Dashboard />
            </Container>
          </div>
        ) : (
          <h1>Error: Project Not Found</h1>
        )}
    </StyledProjectProfile>
  )
}

export default ProjectProfile;
