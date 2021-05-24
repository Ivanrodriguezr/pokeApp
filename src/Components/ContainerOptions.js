import React from "react";
import styled from 'styled-components';
import ComponentSearch from "./ComponentSearch";


const ContainerOptions = () =>{

   

    return (
        <ContainerOptionsStyles>
            <ComponentSearch/>
        </ContainerOptionsStyles>
    );

};

const ContainerOptionsStyles = styled.div`
    border-color: red;
    background-color: #eee;
    display: flex;
    justify-content: center;

`


export default ContainerOptions;