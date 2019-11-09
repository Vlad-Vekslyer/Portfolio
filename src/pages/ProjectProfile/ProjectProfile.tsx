import React from "react"
import {useParams} from "react-router-dom"
import data, {Description} from "../../data"
import {Container, StyledProjectProfile, Header, FeatureList} from "./StyledProjectProfile"
import Dashboard from "./Dashboard/Dashboard"
import TextSection from "./TextSection/TextSection"
import Navbar from "../../global/components/Navbar"

function getData(name: string | undefined) : Description | undefined{
  if(name && data.hasOwnProperty(name)) { return data[name] }
  else { return undefined }
}

const ProjectProfile = () => {
  let {name} = useParams();
  let projectData = getData(name);
  return(
    <>
    <Navbar />
      <StyledProjectProfile>
        {projectData ? (
          <>
            <Header>{projectData.name}</Header>
            <Container>
              <p style={{marginBottom: "20px"}}>{projectData.body}</p>
              <Dashboard desc={projectData}/>
              <TextSection title="Notable Features">
                <FeatureList>
                  {projectData.features.slice(0, Math.ceil(projectData.features.length / 2)).map((feature,index) => <li key={index}>- {feature}</li>)}
                </FeatureList>
                <FeatureList>
                  {projectData.features.slice(Math.ceil(projectData.features.length / 2)).map((feature,index) => <li key={index}>- {feature}</li>)}
                </FeatureList>
              </TextSection>
              <TextSection title="Difficulties I had">
                <p>{projectData.difficulties}</p>
              </TextSection>
            </Container>
          </>
        ) : (
          <h1>Error: Project Not Found</h1>
        )}
      </StyledProjectProfile>
    </>
  )
}

export default ProjectProfile;
