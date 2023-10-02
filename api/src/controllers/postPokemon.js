const { Pokemon } = require("../db");



const createPokemon = async ({ name, image, hp, attack, defense }) => {
  try {
    const newPokemon = await Pokemon.create({ name, image, hp, attack, defense });
    return newPokemon;
  } catch (error) {
    throw new Error(error.message);
  }
};
module.exports = createPokemon;



