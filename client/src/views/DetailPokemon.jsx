import React from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsByDetail } from '../redux/actions';
import { useEffect } from 'react';
import { CardStyle, Content, ID, Image, Subtitle, Title } from '../styled/cardStyled';
import { Link } from 'react-router-dom';
import { Button } from '../styled/button';

const DetailPokemon = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.CopyPokemons);
  const { name, attack, defense, hp, type, image } = pokemon;
  useEffect(() => {
    dispatch(getPokemonsByDetail(id));
  }, [dispatch, id]);

  return (
    
      <Content>
    <CardStyle>
       <Link to={"/home"}>
        <Button >
          volver
        </Button>
      </Link>
      <Title>{name}</Title>
      <Subtitle>attack: {attack}</Subtitle>
      <Subtitle>defense: {defense}</Subtitle>
      <Subtitle>hp: {hp}</Subtitle>
      <Subtitle>types:</Subtitle>
      {Array.isArray(type) ? (
        type.map((type) => <h2 key={type}> {type}</h2>)
        ) : (
          <Subtitle>{type}</Subtitle>
          )}
     <Image src={image} alt={pokemon.name} />
      <ID>id: {id}</ID>
    </CardStyle>
    </Content>
  );
};

export default DetailPokemon;