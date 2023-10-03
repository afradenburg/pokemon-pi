import React from 'react';
import Card from './card';
import { CardContainer } from '../styled/cardContainer.Styled';

const Cards = ({ allPokemons }) => {
  const pokemonList = allPokemons;

  return (
    <CardContainer>
      {pokemonList?.map(( pokemon ) => (
        <Card 
        pokemon={pokemon}
        />
      ))}
    </CardContainer>
  );
};

export default Cards;