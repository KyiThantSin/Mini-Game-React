import { Container } from "react-bootstrap";
import styled from 'styled-components';
import {useState} from 'react';


const Box = styled.div`
    text-align: center;
    justify-content:center;
    padding:20px;
    border:1px solid transparent;
    background-color:#F8F8F8;
    height:100px;
    width:100%;
    border-radius:2%;

    &:hover{
        cursor:pointer;
        background-color:#F3F3F3;
    }
`
const Square = (props) => {
  
    return ( 
        <Container className="p-2" onClick={props.onClickEvent}>
            <Box>
                <h2>{props.value}</h2>
            </Box>
        </Container>
     );
}
 
export default Square;