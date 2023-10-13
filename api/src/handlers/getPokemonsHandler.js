const getPokemons = require("../controllers/getPokemons");

async function getPokemonsHandler(req, res) {
  try {
    const pokemonList = await getPokemons();
    res.status(200).json(pokemonList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = getPokemonsHandler;
