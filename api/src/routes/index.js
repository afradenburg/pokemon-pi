const { Router } = require('express');
const getPokemons = require('../controllers/getPokemons');
const getPokemonsId = require('../controllers/getPokemonsId');
const getPokemonsName = require('../controllers/getPokemonsName');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/pokemons", getPokemons);
router.get("/pokemons/:id", getPokemonsId)
router.get("/pokemons/", getPokemonsName)

module.exports = router;
