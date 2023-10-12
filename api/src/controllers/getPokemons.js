const axios = require("axios");
const { Pokemon } = require("../db");

async function getPokemons() {
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=50";
  try {
    const { data } = await axios.get(URL);
    const urlsPoke = data.results.map((result) => result.url);
    const promises = urlsPoke.map((url) => axios.get(url));
    const responses = await Promise.all(promises);
    const pokemonData = responses.map((response) => response.data);
    const pokemonListApi = pokemonData.map((pokemon) => ({
      name: pokemon.name,
      id: pokemon.id,
      image: pokemon.sprites.front_default,
      hp: pokemon.stats.find((stat) => stat.stat.name === "hp").base_stat,
      attack: pokemon.stats.find((stat) => stat.stat.name === "attack").base_stat,
      defense: pokemon.stats.find((stat) => stat.stat.name === "defense").base_stat,
      type: pokemon.types.map((type) => type.type.name),
    }));

    const dbPokemons = await getPokemonFromDB();
    const pokemonListDb = dbPokemons.map((dbPokemon) => ({
      name: dbPokemon.name,
      id: dbPokemon.id,
      image: dbPokemon.image,
      hp: dbPokemon.hp,
      attack: dbPokemon.attack,
      defense: dbPokemon.defense,
    }));

    const pokemonList = [...pokemonListDb, ...pokemonListApi];
    return pokemonList;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getPokemonFromDB() {
  try {
    const dbPokemons = await Pokemon.findAll();
    return dbPokemons;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = getPokemons;
