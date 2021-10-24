import React from "react";

import Button from 'react-bootstrap/Button';

import "./projectElement.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectElement (props) {
    return (
        <div className = "projectComponent">
            <div className = "projectImageComponent" 
                style={{
                    backgroundImage: `url(${props.image})`
                }}>
                <Button href={props.link} variant="outline-danger" className = "buttonLinkRepo" size="lg">Visit github repository</Button>{' '}
            </div>
            <div className = "projectDescriptionComponent">
                <h1>{props.title}</h1>
            </div>
        </div>
    )
}

export default ProjectElement