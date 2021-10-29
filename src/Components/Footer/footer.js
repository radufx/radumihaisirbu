import React from 'react';

import "./footer.css";

import ReactDOM from 'react-dom';
import {SocialIcon} from "react-social-icons";


function Footer() {
    return (
        <>
            <footer className = "footer">
                <div className = "footer_container">
                    <div className = "footer_container_element">
                        <SocialIcon url="https://www.linkedin.com/in/radu-mihai-s%C3%AErbu-03097a202/" target = "_blank" className = "linkedinIcon"/>
                    </div>
                    <div className = "footer_container_element">
                        <small className='website_rights'>Radu-Mihai Sîrbu © 2021</small>
                    </div>
                    <div className = "footer_container_element">
                        <SocialIcon url="https://github.com/radufx" target = "_blank" className = "githubIcon"/>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;