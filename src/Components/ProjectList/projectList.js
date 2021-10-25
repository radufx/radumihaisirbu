import React from "react";
import ProjectElement from "./projectElement";

import EasyTram from "../../Images/EasyTram.png";
import HealthNow from "../../Images/HealthNow.png";
import ManageIT from "../../Images/ManageIT.png";
import TimisoaraNow from "../../Images/TimisoaraNow.png";
import radumihaisirbu from "../../Images/radumihaisirbu.png";

import "./projectList.css";

const projectDetailsList = [
    {
        imgSrc : EasyTram, 
        desc : "EasyTram is a native android application that displays information about the tram system in the city of Arad, Romania. It displays tram routes, locations of stations and schedule.",
        tech : "Technologies: Java, Firebase"
    },
    {
        imgSrc : HealthNow, 
        desc : "HealthNow is a native android application that allows people to create patients or family doctors accounts, allowing doctors to manage their patients list." ,
        tech : "Technologies: Java, Firebase"
    },
    {
        imgSrc : ManageIT, 
        desc : "ManageIT is a web application dedicated to project management, where people with accounts can create projects, add and solve tasks.",
        tech : "Technologies: React.js, Node.js, MySql"
    },
    {
        imgSrc : TimisoaraNow, 
        desc : "TimisoaraNow is a web application that displays real time air quality information, tram routes and neighborhood areas in the map of the city of Timisoara, Romania.",
        tech : "Technologies: React.js, Node.js"
    },
    {
        imgSrc : radumihaisirbu, 
        desc : "radumihaisirbu.ro is a personal web page with the purpose of displaying projects, personal skills and details about education.",
        tech : "Technologies: React.js"
    }
]

function ProjectList (){
    return (
        <div className = "projectListDiv">
            <h1>These are some of my projects</h1>
            <ProjectElement 
                title="EasyTram" 
                link="https://github.com/radufx/EasyTram2" 
                image = {projectDetailsList[0].imgSrc}
                description = {projectDetailsList[0].desc}
                technologies = {projectDetailsList[0].tech}
            />
            <ProjectElement 
                title="HealthNow" 
                link="https://github.com/radufx/UniHack2020-HealthNow" 
                image = {projectDetailsList[1].imgSrc} 
                description = {projectDetailsList[1].desc}
                technologies = {projectDetailsList[1].tech}
            />
            <ProjectElement 
                title="Manage.IT" 
                link="https://github.com/Catalin-2002/manage.iT" 
                image = {projectDetailsList[2].imgSrc}
                description = {projectDetailsList[2].desc}
                technologies = {projectDetailsList[2].tech}
            />
            <ProjectElement 
                title="TimisoaraNow" 
                link="https://github.com/Catalin-2002/spaceappschallenge2021" 
                image = {projectDetailsList[3].imgSrc}
                description = {projectDetailsList[3].desc}
                technologies = {projectDetailsList[3].tech}
            />
            <ProjectElement 
                title="radumihaisirbu.ro" 
                link="https://github.com/radufx/radumihaisirbu.ro" 
                image = {projectDetailsList[4].imgSrc}
                description = {projectDetailsList[4].desc}
                technologies = {projectDetailsList[4].tech}
            />
        </div>
    )   
}

export default ProjectList