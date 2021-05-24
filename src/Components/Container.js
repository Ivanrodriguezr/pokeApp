import React from "react";
import styled from "styled-components";
import Item from "./Item";

const Container = () => {
    return(
        <ContainerStyles>
            <Item/>
        </ContainerStyles>
    );
};

const ContainerStyles = styled.div`

    display: flex;
    border-color:red;
    margin: 100px;
    background-color: lightblue;
    justify-content: center;
    border-radius: 5px;
`;

export default Container;