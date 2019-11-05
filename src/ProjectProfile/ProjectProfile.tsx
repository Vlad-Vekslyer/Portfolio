import React from "react"
import data, {Description} from "../data"
import {useParams} from "react-router-dom"

function getData(name: string | undefined) : Description | undefined{
  if(name && data.hasOwnProperty(name)) { return data[name] }
  else { return undefined }
}

const ProjectProfile = () => {
  let {name} = useParams();
  let projectData = getData(name);
  return(
    <div>
      {projectData ? (
        <h1>{projectData.name}</h1>
      ) : (
        <h1>Error: Project Not Found</h1>
      )}
    </div>
  )
}

export default ProjectProfile;
