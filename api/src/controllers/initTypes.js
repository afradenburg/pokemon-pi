const axios = require("axios");
const { TypePokemon } = require("../db");

async function getTypes() {
  try {
    const count = await TypePokemon.count();
    if (count === 0) {
      const url = "https://pokeapi.co/api/v2/type";
      const { data } = await axios.get(url);
      const nameType = data.results.map((result) => {
        return { name: result.name };
      });
      return await TypePokemon.bulkCreate(nameType);
    } else {
      console.log("TypePokemon ya tiene los datos");
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = getTypes;
