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

    display: flex;
    justify-content: center;
    width: 100%;
`
export default ContainerOptions;