const {
  getPokemonsName,
  getPokemonByNameFromDB,
} = require("../controllers/getPokemonsName");

async function getPokemonsNameHandler(req, res) {
  const { name } = req.query;
  const nameLower = name.toLowerCase();
  try {
    const dbPokemonName = await getPokemonByNameFromDB(nameLower);
    if (dbPokemonName) {
      res.status(200).json(dbPokemonName);
    } else {
      const pokemonDetail = await getPokemonsName(nameLower);

      if (pokemonDetail) {
        res.status(200).json(pokemonDetail);
      } else {
        res.status(404).json({ message: "Este pokemon no existe" });
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = getPokemonsNameHandler;
