import React from "react";

import Button from 'react-bootstrap/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "./projectElement.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function ProjectElement (props) {
    return (
        <div className = "projectComponent">
            <div className = "projectImageComponent" 
                style={{
                    backgroundImage: `url(${props.image})`
                }}>
                <Button href={props.link} target = "_blank" variant="outline-danger" className = "buttonLinkRepo" size="lg">Visit github repository</Button>{' '}
            </div>
            <div className = "projectDescriptionComponent">
                <p className = "projectTitle">{props.title}</p>
                <Accordion square={false}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Project description</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{props.description}</Typography>
                        <Typography>{props.technologies}</Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}

export default ProjectElement