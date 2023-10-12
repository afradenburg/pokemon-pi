import React from 'react';
import { CardStyle } from '../styled/cardStyled';
import { Link } from 'react-router-dom';
import { Image } from '../styled/cardStyled';

const Card = ({ pokemon }) => {
  const { name, type, id, image } = pokemon;

  return (
    <CardStyle>
      <h1>{name}</h1>
      {Array.isArray(type) ? (
        type.map((type) => <h2 key={type}>Type {type}</h2>)
      ) : (
        <h2>Type: {type}</h2>
      )}
      <Link to={`/home/${id}`}>
        <Image src={image} alt={name} />
      </Link>
    </CardStyle>
  );
};

export default Card;