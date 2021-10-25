import React from 'react';

import { Timeline } from 'antd';

import "./education.css"
import "antd/dist/antd.css";

function Education (){
    return (
        <div className = "educationContainer">
            <p className = "educationTitle">Education</p>
            <Timeline mode = "alternate">
                <Timeline.Item label="September, 2021"> Started Erasmus at Eindhoven University of Technology </Timeline.Item>
                <Timeline.Item label="September, 2020"> Enrollment at Babes-Bolyai University Cluj-Napoca </Timeline.Item>
                <Timeline.Item label="July, 2020"> Graduated Moise Nicoara National College </Timeline.Item>
            </Timeline>
        </div>
    )
}

export default Education;