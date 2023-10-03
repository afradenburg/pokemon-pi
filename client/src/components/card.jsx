import React from 'react';
import { CardStyle } from '../styled/cardStyled';

const Card = ({ pokemon }) => {
  return (
    <CardStyle>
      <h2>name: {pokemon.name}</h2>
      <h2>hp: {pokemon.hp}</h2>
      <h2>attack: {pokemon.attack}</h2>
      <h2>defense: {pokemon.defense}</h2>
      <h2>id: {pokemon.id}</h2>
      <img src={pokemon.image} alt={pokemon.name} />
    </CardStyle>
  );
};

export default Card;