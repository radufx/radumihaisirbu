import React from "react";

import { useState } from "react";
import Button from 'react-bootstrap/Button';
import { useMessage } from "@vechaiui/react"

import "./contactForm.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactForm (){
    const [emailAddress, setEmailAddress] = useState('')
    const [message, setMessage] = useState('')
    const [fullName, setFullName] = useState('')

    const messageStatus = useMessage();

    const validateInput = () => {
        let validationMessage = ""

        if (fullName.length === 0) validationMessage += "full name cannot be empty.\n"
        
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
        if (re.test(emailAddress) === false || emailAddress.length === 0) validationMessage += "email address invalid.\n"
        
        if (message.length === 0) validationMessage += "message cannot be empty.\n"
    
        return validationMessage;
    }

    const handleMessage = (status, messageText) => {
        messageStatus({
          message: messageText,
          status: status,
          position: "bottom-right",
        });
    };

    const sendMessage = () => {
        console.log(validateInput())
        handleMessage("error", validateInput)
    }

    return(
        <div className = "contactForm">
            <div className = "formDiv">
                <form className = "form">
                    <p className = "inputTitle">FULL NAME</p>
                    <textarea
                        className='textInput'
                        name='fullNameInput'
                        type='text'
                        cols="53" 
                        rows="1"
                        onChange = {(e)=>{
                        setFullName(e.target.value)
                        }}
                    />
                    <br />
                    <p className = "inputTitle">EMAIL ADDRESS</p>
                    <textarea
                        className='textInput'
                        name='emailAddressInput'
                        type='text'
                        cols="53"
                        rows="1" 
                        onChange = {(e)=>{
                            setEmailAddress(e.target.value)
                        }}
                    />
                    <br />
                    <p className = "inputTitle">MESSAGE</p>
                    <textarea
                        className= "textInput"
                        name= "messageInput"
                        type = "text"
                        cols = "53" 
                        rows = "5"
                        onChange = {(e)=>{
                            setMessage(e.target.value)
                        }}
                    />
                </form>
                <Button 
                    target = "_blank" 
                    variant = "outline-danger" 
                    className = "buttonSend" 
                    size = "lg"
                    onClick = {() => handleMessage("error", "da")}
                >Send message</Button>
            </div>
        </div>
    )
}

export default ContactForm;