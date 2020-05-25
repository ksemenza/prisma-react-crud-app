import React,{useEffect} from 'react'
import axios from 'axios'
import axiosAuth from '../../axiosAuth'
//PROJECT QUERIES
import {PROJECT_VIEW_ALL as viewProject} from '../../prisma/queries/GetProjects'
import { PROJECT_GET_SINGLE as getSingleProject } from '../../prisma/queries/GetProjects'
//PROJECT TAG QUERIES
import {PROJECT_TAGS_VIEW_ALL as viewProjectTag } from '../../prisma/queries/GetProjectTags'
import {PROJECT_TAGS_GET_SINGLE as getSingleProjectTag } from '../../prisma/queries/GetProjectTags'

import ProjectCard from './ProjectCard'
import ProjectViewModal from './ProjectViewModal'
import ProjectAddModal from './ProjectAddModal'

const ProjectContainer = (props) => {
console.log("props")
console.log(props)

useEffect(() => {
    axiosAuth()
    .get('/')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  
}, [])

return (
        <div>
            <p>Project Container</p>
        </div>
    )
    
}

export default ProjectContainer