import React from "react";
import styled from "styled-components"

const ButtonContainer = styled.button`
    border: 1px solid whitesmoke;
    border-radius: 3px;
    background: ${props=>props.color};
    color: whitesmoke;
    height: 4em;
    margin: 10px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover{
        transition: all 0.3s ease-in-out;
        background: whitesmoke;
        color: ${props=>props.color};
        border:1px solid ${props=>props.color};
    }
`
export  const  Button = (props) => <ButtonContainer color={props.color} type={props.type} onClick={props.onClick}>{props.label}</ButtonContainer>