import React from 'react';
import { CardStyle } from '../styled/cardStyled';
import { Link } from 'react-router-dom'


const Card = ({ pokemon }) => {
  const {name,  type, id, image} = pokemon

  
  return (
    <CardStyle>
      <h1>{name}</h1>
      <h2>types:</h2>
      {
        type.map((type)=> 
        <h2>{type}</h2>
        )
      }
      <Link to={`/home/${id}`}>
      <img src={image} alt={id} />
      </Link>
    </CardStyle>
  );
};

export default Card;