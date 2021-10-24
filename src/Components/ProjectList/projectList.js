import React from "react";
import ProjectElement from "./projectElement";

import EasyTram from "../../Images/EasyTram.png";
import HealthNow from "../../Images/HealthNow.png";
import ManageIT from "../../Images/ManageIT.png";
import TimisoaraNow from "../../Images/TimisoaraNow.png";
import radumihaisirbu from "../../Images/radumihaisirbu.png";

import "./projectList.css";

const imageList = [
    EasyTram,
    HealthNow,
    ManageIT,
    TimisoaraNow,
    radumihaisirbu
]

function ProjectList (){
    return (
        <div className = "projectListDiv">
            <ProjectElement title="EasyTram" link="https://github.com/radufx/EasyTram2" image = {imageList[0]}></ProjectElement>
            <ProjectElement title="HealthNow" link="https://github.com/radufx/UniHack2020-HealthNow" image = {imageList[1]}></ProjectElement>
            <ProjectElement title="Manage.IT" link="https://github.com/Catalin-2002/manage.iT" image = {imageList[2]}></ProjectElement>
            <ProjectElement title="TimisoaraNow" link="https://github.com/Catalin-2002/spaceappschallenge2021" image = {imageList[3]}></ProjectElement>
            <ProjectElement title="radumihaisirbu.ro" link="https://github.com/radufx/radumihaisirbu.ro" image = {imageList[4]}></ProjectElement>
        </div>
    )   
}

export default ProjectList