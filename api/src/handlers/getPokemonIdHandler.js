const {
  getPokemonByIdFromAPI,
  getPokemonByIdFromDB,
} = require("../controllers/getPokemonsId");

async function getPokemonsByIdHandler(req, res) {
  try {
    const { id } = req.params;
    if (!isNaN(id)) {
      const pokemonDetail = await getPokemonByIdFromAPI(id);
      if (pokemonDetail) {
        return res.status(200).json(pokemonDetail);
      }
    }

    const dbPokemon = await getPokemonByIdFromDB(id);
    if (dbPokemon) {
      return res.status(200).json(dbPokemon);
    }

    res
      .status(404)
      .json({ message: "No se encontró el Pokémon en la base de datos" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = getPokemonsByIdHandler;
