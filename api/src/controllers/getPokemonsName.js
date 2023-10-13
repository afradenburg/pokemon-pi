const axios = require("axios");
const { Pokemon } = require("../db");

async function getPokemonsName(nameLower) {
  const URL = "https://pokeapi.co/api/v2/pokemon/";
  try {
    const { data: pokemons } = await axios.get(`${URL}${nameLower}`);
    const pokemonDetail = {
      name: pokemons.name,
      id: pokemons.id,
      image: pokemons.sprites.front_default,
      hp: pokemons.stats.find((props) => props.stat.name === "hp").base_stat,
      attack: pokemons.stats.find((props) => props.stat.name === "attack")
        .base_stat,
      defense: pokemons.stats.find((props) => props.stat.name === "defense")
        .base_stat,
      type: pokemons.types.map((type) => type.type.name),
    };
    return pokemonDetail;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getPokemonByNameFromDB(nameLower) {
  try {
    const dbPokemon = await Pokemon.findOne({
      where: { name: nameLower },
    });
    return dbPokemon;
  } catch (error) {
    throw new Error(error.message);
  }
}
module.exports = { getPokemonsName, getPokemonByNameFromDB };
