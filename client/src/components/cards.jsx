import React from "react";
import Card from "./card";
import { CardContainer } from "../styled/cardContainer.Styled";

const Cards = ({ allPokemons }) => {
  let pokemonList = [];

  if (Array.isArray(allPokemons)) {
    pokemonList = allPokemons;
  } else if (typeof allPokemons === "object") {
    pokemonList = [allPokemons];
  }

  return (
    <CardContainer>
      {pokemonList.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </CardContainer>
  );
};

export default Cards;
