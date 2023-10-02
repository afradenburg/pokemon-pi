const { Router } = require('express');
const getPokemonsHandler = require('../handlers/getPokemonsHandler');
const getPokemonsByIdHandler = require('../handlers/getPokemonIdHandler');
const getPokemonsNameHandler = require('../handlers/getPokemonsNameHandler');
const createPokemonHandler = require('../handlers/postPokemonHandler');
const getTypesHandler = require('../handlers/getTypesHandler');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/pokemons", getPokemonsHandler);
router.get("/pokemons/:id", getPokemonsByIdHandler)
router.get("/pokemon", getPokemonsNameHandler)
router.post("/pokemons", createPokemonHandler)
router.get("/types", getTypesHandler)

module.exports = router;
