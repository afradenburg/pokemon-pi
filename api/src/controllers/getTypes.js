const axios = require("axios");
const { TypePokemon }= require("../db");

async function getTypes() {
  const url = "https://pokeapi.co/api/v2/type";
  try {
    const { data } = await axios.get(url);
    const nameType = data.results.map((result) => result.name);
    const addType = await Promise.all(nameType.map((name) => TypePokemon.create({ name })));
    return addType;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = getTypes;


