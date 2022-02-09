import React from "react"
import { Container } from "react-materialize"

import CurrentWork from "../../../components/CurrentWork"
import OtherWork from "../../../components/OtherWork"

import './style.css'

const ProjectsSection = () => {

    return (
        <div className="center-align">
            <CurrentWork />
            <OtherWork />
        </div >
    )
}

export default ProjectsSection;