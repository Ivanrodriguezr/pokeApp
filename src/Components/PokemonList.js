import React, {  } from "react";
import styled from "styled-components";
import PokemonItem from "./PokemonItem";



const PokemonList = () => {

    const list = [{ id: 1, name: "charmander"}, { id: 2, name: "pikachu"}, { id: 3, name: "onix"},
{ id:4, name:"bulbasaur"}, { id:5, name:"charizard"}, { id:6, name:"mew"}]

    return(
        <>
        <Container>
            {list.map((pokemon) => {
                return(
                    <PokemonItem pokemonName={pokemon.name} key={pokemon.id}>
                    </PokemonItem>)
            })}
            
        </Container>
        </>
    );
};

const Container = styled.div`

    display: flex;
    border-color:red;
    margin: 55px;
    background-color: #3f51b5;
    justify-content: center;
    border-radius: 5px;
    flex-wrap: wrap;
    width: 950px;
`;

export default PokemonList;