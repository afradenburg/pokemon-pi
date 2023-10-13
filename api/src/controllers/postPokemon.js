const { Pokemon, TypePokemon } = require("../db");

const createPokemon = async ({ name, image, hp, attack, defense, type }) => {
  try {
    const newPokemon = await Pokemon.create({
      name,
      image,
      hp,
      attack,
      defense,
    });

    if (type && type.length > 0) {
      const associationTypes = await TypePokemon.findAll({
        where: {
          name: type,
        },
      });
      await newPokemon.addTypePokemons(associationTypes);
    }
    return newPokemon;
  } catch (error) {
    throw new Error(error.message);
  }
};
module.exports = createPokemon;
