import React from "react";
import styled from 'styled-components';
import pikachu from './../images/pikachu.jpg';


const PokemonImage = () =>{

    return(
        <Image src={pikachu}/>
    );

}

const Image = styled.img`
    height: 260px;
    width: 250px;
`;


export default PokemonImage;