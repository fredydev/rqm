import React from "react";
import styled from "styled-components";
import {Button} from "./Button"


const Rqm = ({citation,color,onClick}) => {
    return(
        <Container color={color}>
            <i className="fa fa-quote-left"></i>
            <blockquote >
                {citation.quote}
            </blockquote>
            <div className="author">--{citation.auteur}</div>
            <Button label="Nouvelle citation" onClick={onClick} color={color}/>
        </Container>
    );
}

const Container = styled.div`
        border-radius: 3px;
    padding: 20px;
    border: 1px solid whitesmoke;
    transition: all 0.3s ease-in-out;
    color: ${props=>props.color};
    background: whitesmoke;
    .author{
        float: right;
    }
`

export default Rqm