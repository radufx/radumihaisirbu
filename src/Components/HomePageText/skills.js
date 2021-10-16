import React from 'react';

import "./skills.css";

import javascript_logo from "../../Images/Javascript_logo.png"
import cpp_logo from "../../Images/cpp_logo.svg.png"
import java_logo from "../../Images/java_logo.png"
import python_logo from "../../Images/Python_logo.svg.png"

function Skills () {
    return (
        <div className = "skillsContainer">
            <p className = "skillsTitle">Skills</p>
            <div className = "programmingLanguages">
                <p className = "programmingLanguagesTitle">Programming languages</p>
                <div className = "programmingLanguage">
                    <img src={cpp_logo} className = "cppLogo" />
                </div>
                <div className = "programmingLanguage">
                    <img src={javascript_logo} className = "javascriptLogo"/>
                </div>
                <div className = "programmingLanguage">
                    <img src={python_logo} className = "pythonLogo"/>
                </div>
                <div className = "programmingLanguage">
                    <img src={java_logo} className = "javaLogo"/>
                </div>
            </div>
            <p className = "skillTitle">Strong algorithmic and data structures knowledge</p>
            <p className = "skillTitle">Strong knowledge of time and space complexity</p>
            <p className = "skillTitle">Good knowledge of object oriented programming and layered architecture</p>
        </div>
    )
}

export default Skills;