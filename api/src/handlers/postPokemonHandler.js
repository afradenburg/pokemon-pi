const createPokemon = require("../controllers/postPokemon")

async  function createPokemonHandler (req, res) {
  try {
    const newPokemon = await createPokemon(req.body);
    res.status(201).send(newPokemon); 
  } catch (error) {
    res.status(500).send("Error del servidor");
  }
};

module.exports = createPokemonHandler;