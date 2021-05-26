import React from "react";
import styled from 'styled-components';
import Pokemon from '../images/TituloUniversoPokémon.png'
import Pokeball from '../images/pokeball.png'

const Header = styled.div`
    display: flex;
    background-color: #3f51b5;
    height: 150px;
    width: 100%;
    border-radius:10px ;
    margin-bottom: 50px;
    justify-content: space-around;
`;

const ImagePokemon = styled.img`
    width: 400px;
`;

const ImagePokeball = styled.img`
    width: 124px;
    height: 124px;
    margin-top: 11px;
`;

const ComponentHeader = () => {

    return(
        <Header>
            <ImagePokeball src={Pokeball}></ImagePokeball>
            <ImagePokemon src={Pokemon}></ImagePokemon>
        </Header>
    );
}

export default ComponentHeader;