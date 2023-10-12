const axios = require("axios");
const { Pokemon } = require("../db");
async function getPokemonByIdFromAPI(id) {
  const URL = "https://pokeapi.co/api/v2/pokemon/";
  try {
    const { data: pokemon } = await axios.get(`${URL}${id}`);
    const pokemonDetail = {
      name: pokemon.name,
      id: pokemon.id,
      image: pokemon.sprites.front_default,
      hp: pokemon.stats.find((props) => props.stat.name === "hp").base_stat,
      attack: pokemon.stats.find((props) => props.stat.name === "attack").base_stat,
      defense: pokemon.stats.find((props) => props.stat.name === "defense").base_stat,
      type: pokemon.types.map((type) => type.type.name),
    };
    return pokemonDetail;
  } catch (error) {
    throw new Error(error.message);
  }
}
async function getPokemonByIdFromDB(id) {
  try {
    const dbPokemon = await Pokemon.findOne({
      where: { id: id },
    });
    return dbPokemon;
  } catch (error) {
    throw new Error(error.message);
  }
}
module.exports = { getPokemonByIdFromAPI, getPokemonByIdFromDB };
