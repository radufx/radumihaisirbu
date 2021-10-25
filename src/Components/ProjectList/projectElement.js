import React from "react";

import Button from 'react-bootstrap/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { StylesProvider } from "@material-ui/core/styles";

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
                <StylesProvider injectFirst>
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
                </StylesProvider>
            </div>
        </div>
    )
}

export default ProjectElement