import React from 'react';
import { CardStyle } from '../styled/cardStyled';

const Card = ({ pokemon }) => {
  return (
    <CardStyle>
      <h1>{pokemon.name}</h1>
      <h2>{pokemon.attack}</h2>
      <h2>types:</h2>
      {
        pokemon.type.map((type)=> 
        <h2>{type}</h2>
        )
      }
      <img src={pokemon.image} alt={pokemon.name} />
    </CardStyle>
  );
};

export default Card;