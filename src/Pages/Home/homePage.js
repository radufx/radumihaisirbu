import React from 'react';
import Education from '../../Components/HomePageText/education';

import PersonalDescription from '../../Components/HomePageText/personalDescription';
import Prizes from '../../Components/HomePageText/prizes';
import Skills from '../../Components/HomePageText/skills';
import ProfilePicture from '../../Components/ProfilePicture/profilePicture';

import "./homePage.css"

function homePage() {
    return(
        <div className = "homeVerticalContainer">
            <div className = "homeVerticalContainer_item">
                <div className = "homeHorizontalContainer1">
                    <div className = "homeHorizontalContainer1_item">
                        <ProfilePicture/>
                    </div>
                    <div className = "homeHorizontalContainer1_item">
                        <PersonalDescription/>
                    </div>
                </div>
            </div>
            <div className = "homeVerticalContainer_item">
                <Education/>
            </div>
            <div className = "homeVerticalContainer_item">
                <Prizes/>
            </div>
            <div className = "homeVerticalContainer_item">
                <Skills/>
            </div>
        </div>
    )
}

export default homePage;