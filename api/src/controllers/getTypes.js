const axios = require("axios");
const { TypePokemon } = require("../db");

async function getTypes() {
  try {
    return await TypePokemon.findAll();
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = getTypes;
