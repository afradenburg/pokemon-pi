import React from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsByDetail } from '../redux/actions';
import { useEffect } from 'react';
import { CardStyle } from '../styled/cardStyled';

const DetailPokemon = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.CopyPokemons);
  const { name, attack, defense, hp, type, image } = pokemon;
  useEffect(() => {
    dispatch(getPokemonsByDetail(id));
  }, [dispatch, id]);

  console.log("Prop recibido:", pokemon);

  return (
    <CardStyle>
      <h1>{name}</h1>
      <h2>id: {id}</h2>
      <h2>attack: {attack}</h2>
      <h2>defense: {defense}</h2>
      <h2>hp: {hp}</h2>
      <h2>types:</h2>
      {Array.isArray(type) ? (
        type.map((type) => <h2 key={type}> {type}</h2>)
      ) : (
        <h2>{type}</h2>
      )}
      <img src={image} alt={pokemon.id} />
    </CardStyle>
  );
};

export default DetailPokemon;