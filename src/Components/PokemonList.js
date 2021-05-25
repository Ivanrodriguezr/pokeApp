import React from "react";
import styled from "styled-components";
import PokemonItem from "./PokemonItem";

const PokemonList = () => {
    return(
        <Container>
            <PokemonItem pokemonName="Pikachu"/>
            <PokemonItem pokemonName="Raichu"/>
            <PokemonItem pokemonName="Bulbasaur"/>
            <PokemonItem pokemonName="Pikachu"/>
            <PokemonItem pokemonName="Raichu"/>
            <PokemonItem pokemonName="Bulbasaur"/>
            <PokemonItem pokemonName="Pikachu"/>
            <PokemonItem pokemonName="Raichu"/>
            <PokemonItem pokemonName="Bulbasaur"/>
            <PokemonItem pokemonName="Pikachu"/>
            <PokemonItem pokemonName="Raichu"/>
            <PokemonItem pokemonName="Bulbasaur"/>           
        </Container>
    );
};

const Container = styled.div`

    display: flex;
    border-color:red;
    margin: 100px;
    background-color: #3f51b5;
    justify-content: center;
    border-radius: 5px;
    flex-wrap: wrap;
    width: 950px;
`;

export default PokemonList;