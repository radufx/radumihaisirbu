import React from 'react';

import { Timeline } from 'antd';

import "./prizes.css"
import "antd/dist/antd.css";

function Prizes () {
    return (
        <div className = "prizesContainer">
            <p className = "prizesTitle">Contests prizes and participations</p>
            <Timeline mode = "alternate">
                <Timeline.Item label="December, 2021"> Finalist - UniHack </Timeline.Item>
                <Timeline.Item label="October, 2021"> NASA Space Apps Challenge </Timeline.Item>
                <Timeline.Item label="May, 2021"> Finalist - FII Code 2021 </Timeline.Item>
                <Timeline.Item label="November, 2020"> Startup Survivor Prize - UniHack </Timeline.Item>
                <Timeline.Item label="March, 2020"> 1st Prize - County Computer Science Olympiad </Timeline.Item>
                <Timeline.Item label="November, 2019"> Mention Prize - Hack4Arad </Timeline.Item>
                <Timeline.Item label="May, 2019"> National Computer Science Olympiad </Timeline.Item>
                <Timeline.Item label="March, 2019"> Traian Lalescu Intercounty Mathematics Contest </Timeline.Item>
                <Timeline.Item label="March, 2019"> Mention Prize - County Mathematics Olympiad </Timeline.Item>
                <Timeline.Item label="March, 2019"> 1st Prize - County Computer Science Olympiad </Timeline.Item>
                <Timeline.Item label="October 2018 - January 2019"> National Computer Science Olympiad for Teams </Timeline.Item>
                <Timeline.Item label="April, 2018"> National Computer Science Olympiad </Timeline.Item>
                <Timeline.Item label="March, 2018"> 1st Prize - County Computer Science Olympiad </Timeline.Item>
                <Timeline.Item label="April, 2017"> National Computer Science Olympiad </Timeline.Item>
                <Timeline.Item label="March, 2017"> 1st Prize - County Computer Science Olympiad </Timeline.Item>
                

            </Timeline>
        </div>
    )
}

export default Prizes;