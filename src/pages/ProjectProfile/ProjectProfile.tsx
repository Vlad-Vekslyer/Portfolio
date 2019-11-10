import React, {useCallback} from "react"
import {useParams} from "react-router-dom"
import data, {Description} from "../../data"
import {Container, StyledProjectProfile, FeatureList, TopDesc} from "./StyledProjectProfile"
import Dashboard from "./Dashboard/Dashboard"
import TextSection from "./TextSection/TextSection"
import Navbar from "../../global/components/Navbar"
import Header from "../../global/styles/Header"

function getData(name: string | undefined) : Description | undefined{
  if(name && data.hasOwnProperty(name)) { return data[name] }
  else { return undefined }
}

function isMobile(): boolean{
  let searchParams = new URLSearchParams(window.location.search);
  let isMobile = searchParams.get("mobile");
  return !!isMobile;
}

const ProjectProfile = () => {
  let mobile = isMobile();
  const scrollUp = useCallback(element => {
    if(element !== null){
      window.scrollTo(0,0)
    }
  }, [])
  let {name} = useParams();
  let projectData = getData(name);
  return(
    <>
    <Navbar/>
      <StyledProjectProfile ref={scrollUp}>
        {projectData ? (
          <>
            <Header>{projectData.name}</Header>
            <Container>
              <TopDesc style={{marginBottom: "20px"}}>{projectData.body}</TopDesc>
              <Dashboard isMobile={mobile} desc={projectData}/>
              <TextSection title="Notable Features">
                <FeatureList>
                  {projectData.features.slice(0, Math.ceil(projectData.features.length / 2)).map((feature,index) => <li key={index}>- {feature}</li>)}
                </FeatureList>
                <FeatureList>
                  {projectData.features.slice(Math.ceil(projectData.features.length / 2)).map((feature,index) => <li key={index}>- {feature}</li>)}
                </FeatureList>
              </TextSection>
              <TextSection title="Difficulties I had">
                {projectData.difficulties.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
              </TextSection>
              <TextSection title="How I solved them">
                {projectData.solutions.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
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
