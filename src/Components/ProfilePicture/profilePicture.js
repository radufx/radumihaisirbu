import React from 'react';

import "./profilePicture.css";

import profilePicture from "../../Images/profilePicture.jpg"

function ProfilePicture() {
    return (
        <div className = "profileImage_component">
            <img src={profilePicture} alt="Avatar" className = "profileImage"></img>
        </div>
    )
}

export default ProfilePicture;