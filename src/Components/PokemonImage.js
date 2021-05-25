import React from "react";
import styled from 'styled-components';



const PokemonImage = (props) =>{

    const namePokemon = "https://img.pokemondb.net/artwork/large/" + props.pokeName + ".jpg";

    return(
        <>
        <Image src={namePokemon}/>
        </>
    );

}

const Image = styled.img`
    height: 240px;
    width: 240px;
`;


export default PokemonImage;