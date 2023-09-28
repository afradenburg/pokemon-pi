const axios = require("axios");

async function getPokemons(req, res) {
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=20";
  try {
    const { data } = await axios.get(URL);
    const urlsPoke = data.results.map((result) => result.url);
    const promises = urlsPoke.map((url) => axios.get(url)); 

    Promise.all(promises).then((responses) => {
      const pokemonData = responses.map((response) => response.data);
      const pokemonList = pokemonData.map((pokemon) => ({
        name: pokemon.name,
        id: pokemon.id,
        image: pokemon.sprites.front_default, // Obtenemos la imagen del sprite del Pokémon
        hp: pokemon.stats.find((stat) => stat.stat.name === "hp").base_stat, 
        attack: pokemon.stats.find((stat) => stat.stat.name === "attack").base_stat, 
        defense: pokemon.stats.find((stat) => stat.stat.name === "defense").base_stat, 
      }));

      res.status(200).json(pokemonList);
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = getPokemons;
