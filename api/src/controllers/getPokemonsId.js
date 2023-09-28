const axios = require("axios");

async function getPokemonsId(req, res) {
  const URL = "https://pokeapi.co/api/v2/pokemon/";
  try {
    const { id } = req.params;
    const { data: pokemon } = await axios.get(`${URL}${id}`);

    const pokemonDetail = {
      name: pokemon.name,
      id: pokemon.id,
      image: pokemon.sprites.front_default,
      hp: pokemon.stats.find((props) => props.stat.name === "hp").base_stat,
      attack: pokemon.stats.find((props) => props.stat.name === "attack").base_stat,
      defense: pokemon.stats.find((props) => props.stat.name === "defense").base_stat,
      type: pokemon.types.map((type)=> type.type.name)
    };
    pokemonDetail
      ? res.status(200).json(pokemonDetail) // Devuelve solo el objeto pokemonDetail
      : res.status(404).json({ message: "sin pokedetalles" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = getPokemonsId;