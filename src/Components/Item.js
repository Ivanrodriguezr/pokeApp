import React from "react";
import styled from 'styled-components';


const Item = () =>{    
    return(
            <>
            <ItemStyles>Pokemon</ItemStyles>
            <ItemStyles>Pokemon</ItemStyles>
            <ItemStyles>Pokemon</ItemStyles>
            <ItemStyles>Pokemon</ItemStyles>
            <ItemStyles>Pokemon</ItemStyles>
            </>
    )

}

const ItemStyles = styled.div`

    text-align: center;
    border-style: solid;
    border-color: grey;
    margin: 5px;

`

export default Item;