import React from "react";
import PokemonList from "./Components/PokemonList";
import ContainerOptions from "./Components/ContainerOptions";
import styled from "styled-components";
import ComponentHeader from "./Components/ComponentHeader";

const App = () => {

  return (
    <ContainerApp>
      <ComponentHeader/>
      <ContainerOptions/>
      <PokemonList/>
    </ContainerApp>
  );
}

const ContainerApp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default App;
